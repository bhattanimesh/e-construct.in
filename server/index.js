import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'econstruct_jwt_secret_change_me';
const DATA_DIR = path.join(__dirname, 'data');

// ─── ENSURE DATA DIRS ─────────────────────────────────────────────────────────
const UPLOADS_DIR = path.join(__dirname, '..', 'public', 'uploads');
[UPLOADS_DIR, DATA_DIR].forEach(d => { if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true }); });

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const dataFile = (name) => path.join(DATA_DIR, `${name}.json`);

const readJSON = (file, fallback = []) => {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); }
  catch { return fallback; }
};

const writeJSON = (file, data) => fs.writeFileSync(file, JSON.stringify(data, null, 2));

// ─── ADMIN CREDENTIALS ────────────────────────────────────────────────────────
const CREDS_FILE = dataFile('credentials');
const getCredentials = () => readJSON(CREDS_FILE, null);

// Initialise credentials on first run
if (!getCredentials()) {
  const defaultPassword = process.env.ADMIN_PASSWORD || 'econstruct2024';
  const hash = bcrypt.hashSync(defaultPassword, 10);
  writeJSON(CREDS_FILE, { passwordHash: hash });
  console.log(`🔑  Admin credentials initialised. Default password: ${defaultPassword}`);
}

// ─── CORS ─────────────────────────────────────────────────────────────────────
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:4173',
  process.env.SITE_URL,
].filter(Boolean);

app.use(cors({
  origin: (origin, cb) => {
    if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
    cb(new Error(`CORS blocked: ${origin}`));
  },
}));

app.use(express.json({ limit: '10mb' }));

// ─── AUTH MIDDLEWARE ──────────────────────────────────────────────────────────
const requireAuth = (req, res, next) => {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return res.status(401).json({ error: 'Unauthorised' });
  try {
    req.admin = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Token invalid or expired' });
  }
};

// ─── AUTH ROUTES ──────────────────────────────────────────────────────────────

// POST /api/auth/login
app.post('/api/auth/login', (req, res) => {
  const { password } = req.body || {};
  if (!password) return res.status(400).json({ error: 'Password required' });

  const creds = getCredentials();
  if (!creds || !bcrypt.compareSync(password, creds.passwordHash)) {
    return res.status(401).json({ error: 'Incorrect password' });
  }

  const token = jwt.sign({ role: 'admin' }, JWT_SECRET, { expiresIn: '12h' });
  res.json({ token });
});

// POST /api/auth/change-password
app.post('/api/auth/change-password', requireAuth, (req, res) => {
  const { currentPassword, newPassword } = req.body || {};
  if (!currentPassword || !newPassword) return res.status(400).json({ error: 'Both passwords required' });
  if (newPassword.length < 8) return res.status(400).json({ error: 'New password must be at least 8 characters' });

  const creds = getCredentials();
  if (!bcrypt.compareSync(currentPassword, creds.passwordHash)) {
    return res.status(401).json({ error: 'Current password is incorrect' });
  }

  writeJSON(CREDS_FILE, { passwordHash: bcrypt.hashSync(newPassword, 10) });
  res.json({ ok: true });
});

// GET /api/auth/verify — check if token is still valid
app.get('/api/auth/verify', requireAuth, (_req, res) => res.json({ ok: true }));

// ─── CONTACT SUBMISSIONS ──────────────────────────────────────────────────────
const SUBMISSIONS_FILE = dataFile('submissions');

// POST /api/contact  — called by the public contact form
app.post('/api/contact', (req, res) => {
  const { name, email, phone, service, message } = req.body || {};
  if (!name || !email || !message) return res.status(400).json({ error: 'Name, email and message are required' });

  const submissions = readJSON(SUBMISSIONS_FILE, []);
  const entry = {
    id: Date.now(),
    name, email, phone: phone || '', service: service || '', message,
    read: false,
    createdAt: new Date().toISOString(),
  };
  submissions.unshift(entry);
  writeJSON(SUBMISSIONS_FILE, submissions);
  res.json({ ok: true });
});

// GET /api/contact  — admin: list all submissions
app.get('/api/contact', requireAuth, (_req, res) => {
  res.json(readJSON(SUBMISSIONS_FILE, []));
});

// PATCH /api/contact/:id/read  — mark as read
app.patch('/api/contact/:id/read', requireAuth, (req, res) => {
  const id = Number(req.params.id);
  const submissions = readJSON(SUBMISSIONS_FILE, []);
  const updated = submissions.map(s => s.id === id ? { ...s, read: true } : s);
  writeJSON(SUBMISSIONS_FILE, updated);
  res.json({ ok: true });
});

// DELETE /api/contact/:id
app.delete('/api/contact/:id', requireAuth, (req, res) => {
  const id = Number(req.params.id);
  const submissions = readJSON(SUBMISSIONS_FILE, []);
  writeJSON(SUBMISSIONS_FILE, submissions.filter(s => s.id !== id));
  res.json({ ok: true });
});

// ─── ACTIVITY LOG ─────────────────────────────────────────────────────────────
const LOG_FILE = dataFile('activity');
const MAX_LOG = 100;

export const logActivity = (action, detail = '') => {
  const log = readJSON(LOG_FILE, []);
  log.unshift({ id: Date.now(), action, detail, at: new Date().toISOString() });
  writeJSON(LOG_FILE, log.slice(0, MAX_LOG));
};

// GET /api/activity
app.get('/api/activity', requireAuth, (_req, res) => {
  res.json(readJSON(LOG_FILE, []));
});

// ─── BACKUP / RESTORE ─────────────────────────────────────────────────────────
const BACKUP_DIR = path.join(DATA_DIR, 'backups');
if (!fs.existsSync(BACKUP_DIR)) fs.mkdirSync(BACKUP_DIR, { recursive: true });

// POST /api/backup  — save current content snapshot
app.post('/api/backup', requireAuth, (req, res) => {
  const { content } = req.body || {};
  if (!content) return res.status(400).json({ error: 'No content provided' });

  const filename = `backup_${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
  const filepath = path.join(BACKUP_DIR, filename);
  writeJSON(filepath, { content, savedAt: new Date().toISOString() });
  logActivity('Backup created', filename);
  res.json({ ok: true, filename });
});

// GET /api/backups  — list available backups
app.get('/api/backups', requireAuth, (_req, res) => {
  try {
    const files = fs.readdirSync(BACKUP_DIR)
      .filter(f => f.endsWith('.json'))
      .map(f => {
        const stat = fs.statSync(path.join(BACKUP_DIR, f));
        const data = readJSON(path.join(BACKUP_DIR, f), {});
        return { filename: f, savedAt: data.savedAt || stat.mtime.toISOString(), size: stat.size };
      })
      .sort((a, b) => new Date(b.savedAt) - new Date(a.savedAt));
    res.json(files);
  } catch { res.json([]); }
});

// GET /api/backups/:filename  — download a backup
app.get('/api/backups/:filename', requireAuth, (req, res) => {
  const filename = path.basename(req.params.filename);
  const filepath = path.join(BACKUP_DIR, filename);
  if (!fs.existsSync(filepath)) return res.status(404).json({ error: 'Backup not found' });
  res.download(filepath);
});

// DELETE /api/backups/:filename
app.delete('/api/backups/:filename', requireAuth, (req, res) => {
  const filename = path.basename(req.params.filename);
  const filepath = path.join(BACKUP_DIR, filename);
  if (!fs.existsSync(filepath)) return res.status(404).json({ error: 'Not found' });
  fs.unlinkSync(filepath);
  res.json({ ok: true });
});

// ─── IMAGE UPLOAD ─────────────────────────────────────────────────────────────
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOADS_DIR),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const base = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9_-]/g, '_').slice(0, 60);
    cb(null, `${Date.now()}_${base}${ext}`);
  },
});

const ALLOWED_MIME = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/avif', 'image/svg+xml'];
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (ALLOWED_MIME.includes(file.mimetype)) return cb(null, true);
    cb(new Error(`File type not allowed: ${file.mimetype}`));
  },
});

// PDF storage
const PDFS_DIR = path.join(__dirname, '..', 'public', 'pdfs');
if (!fs.existsSync(PDFS_DIR)) fs.mkdirSync(PDFS_DIR, { recursive: true });

const pdfStorage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, PDFS_DIR),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const base = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9_-]/g, '_').slice(0, 60);
    cb(null, `${Date.now()}_${base}${ext}`);
  },
});

const uploadPdf = multer({
  storage: pdfStorage,
  limits: { fileSize: 50 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (file.mimetype === 'application/pdf') return cb(null, true);
    cb(new Error('Only PDF files are allowed'));
  },
});

// POST /api/upload — image
app.post('/api/upload', requireAuth, upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file received.' });
  logActivity('Image uploaded', req.file.filename);
  res.json({ url: `/uploads/${req.file.filename}`, filename: req.file.filename, size: req.file.size });
});

// GET /api/uploads — list images
app.get('/api/uploads', requireAuth, (_req, res) => {
  try {
    const files = fs.readdirSync(UPLOADS_DIR)
      .filter(f => ['.jpg','.jpeg','.png','.webp','.gif','.avif','.svg'].includes(path.extname(f).toLowerCase()))
      .map(f => {
        const stat = fs.statSync(path.join(UPLOADS_DIR, f));
        return { filename: f, url: `/uploads/${f}`, size: stat.size, created: stat.birthtimeMs };
      })
      .sort((a, b) => b.created - a.created);
    res.json(files);
  } catch { res.json([]); }
});

// DELETE /api/uploads/:filename
app.delete('/api/uploads/:filename', requireAuth, (req, res) => {
  const filename = path.basename(req.params.filename);
  const filepath = path.join(UPLOADS_DIR, filename);
  if (!fs.existsSync(filepath)) return res.status(404).json({ error: 'File not found.' });
  fs.unlinkSync(filepath);
  logActivity('Image deleted', filename);
  res.json({ ok: true });
});

// POST /api/upload/pdf
app.post('/api/upload/pdf', requireAuth, uploadPdf.single('pdf'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No PDF received.' });
  logActivity('PDF uploaded', req.file.filename);
  res.json({ url: `/pdfs/${req.file.filename}`, filename: req.file.filename, size: req.file.size });
});

// GET /api/pdfs — list PDFs
app.get('/api/pdfs', requireAuth, (_req, res) => {
  try {
    const files = fs.readdirSync(PDFS_DIR)
      .filter(f => path.extname(f).toLowerCase() === '.pdf')
      .map(f => {
        const stat = fs.statSync(path.join(PDFS_DIR, f));
        return { filename: f, url: `/pdfs/${f}`, size: stat.size, created: stat.birthtimeMs };
      })
      .sort((a, b) => b.created - a.created);
    res.json(files);
  } catch { res.json([]); }
});

// DELETE /api/pdfs/:filename
app.delete('/api/pdfs/:filename', requireAuth, (req, res) => {
  const filename = path.basename(req.params.filename);
  const filepath = path.join(PDFS_DIR, filename);
  if (!fs.existsSync(filepath)) return res.status(404).json({ error: 'File not found.' });
  fs.unlinkSync(filepath);
  logActivity('PDF deleted', filename);
  res.json({ ok: true });
});

// ─── SERVE FRONTEND IN PRODUCTION ─────────────────────────────────────────────
const DIST_DIR = path.join(__dirname, '..', 'dist');
if (fs.existsSync(DIST_DIR)) {
  app.use(express.static(DIST_DIR));
  app.use('/uploads', express.static(UPLOADS_DIR));
  app.use('/pdfs', express.static(PDFS_DIR));
  app.get('*', (_req, res) => res.sendFile(path.join(DIST_DIR, 'index.html')));
}

app.listen(PORT, () => {
  console.log(`✅  E-Construct server running on port ${PORT}`);
});
