import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useAdmin } from '../context/AdminContext';
import {
  LayoutDashboard, Briefcase, FolderOpen, BookOpen, Users, UserCheck,
  Phone, MessageSquare, HelpCircle, Star, Settings, LogOut, Plus, Trash2,
  Edit3, Save, X, ChevronDown, BarChart3, Eye, RefreshCw, Menu,
  CheckCircle, AlertCircle, Search, Image, Globe, FileText, Layers,
  ChevronRight, Home, Zap, Download, Upload, Clock, Mail, Lock,
  Inbox, Activity, Shield, Calendar as CalendarIcon
} from 'lucide-react';

// ─── AUTH ─────────────────────────────────────────────────────────────────────

const TOKEN_KEY = 'econstruct_admin_token';

const getToken = () => sessionStorage.getItem(TOKEN_KEY);
const setToken = (t) => sessionStorage.setItem(TOKEN_KEY, t);
const clearToken = () => sessionStorage.removeItem(TOKEN_KEY);

const apiFetch = (url, opts = {}) => {
  const token = getToken();
  return fetch(url, {
    ...opts,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(opts.headers || {}),
    },
  });
};

const LoginScreen = ({ onLogin }) => {
  const [pw, setPw] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErr('');

    let serverReachable = false;
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: pw }),
      });
      serverReachable = true;
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Incorrect password');
      setToken(data.token);
      onLogin();
    } catch (e) {
      if (serverReachable) {
        // Server responded but login failed (wrong password, etc.)
        setErr(e.message || 'Incorrect password. Try again.');
      } else {
        // Server is not reachable — fall back to local env password
        const fallback = import.meta.env.VITE_ADMIN_PASSWORD || 'econstruct2024';
        if (pw === fallback) {
          setToken('local-dev-token');
          onLogin();
        } else {
          setErr('Incorrect password. Try again.');
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-10 w-full max-w-md shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Shield className="text-black" size={28} />
          </div>
          <h1 className="text-2xl font-black text-slate-900">Admin Panel</h1>
          <p className="text-gray-500 text-sm mt-1">E-Construct Website Manager</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-slate-600 block mb-1.5">Password</label>
            <input
              type="password"
              value={pw}
              onChange={e => { setPw(e.target.value); setErr(''); }}
              placeholder="Enter admin password"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none text-sm"
              autoFocus
            />
            {err && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1"><AlertCircle size={12} />{err}</p>}
          </div>
          <button type="submit" disabled={loading}
            className="w-full py-3 bg-yellow-500 hover:bg-black hover:text-white text-black font-bold rounded-xl transition-all duration-300 text-sm disabled:opacity-50 flex items-center justify-center gap-2">
            {loading ? <><span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />Signing in…</> : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
};

// ─── TOAST SYSTEM ─────────────────────────────────────────────────────────────

let _toastFn = null;
export const toast = (msg, type = 'success') => _toastFn && _toastFn(msg, type);

const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);
  useEffect(() => {
    _toastFn = (msg, type) => {
      const id = Date.now();
      setToasts(p => [...p, { id, msg, type }]);
      setTimeout(() => setToasts(p => p.filter(t => t.id !== id)), 3500);
    };
    return () => { _toastFn = null; };
  }, []);
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-2 pointer-events-none">
      {toasts.map(({ id, msg, type }) => (
        <div key={id} className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-xl text-sm font-semibold pointer-events-auto animate-in slide-in-from-right-4 duration-300 ${type === 'success' ? 'bg-slate-900 text-white' :
            type === 'error' ? 'bg-red-600 text-white' :
              'bg-yellow-500 text-black'
          }`}>
          {type === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
          {msg}
        </div>
      ))}
    </div>
  );
};

// ─── SHARED UI ────────────────────────────────────────────────────────────────

const SectionHeader = ({ title, subtitle, action }) => (
  <div className="mb-6 flex items-start justify-between gap-4">
    <div>
      <h2 className="text-xl font-black text-slate-900">{title}</h2>
      {subtitle && <p className="text-gray-500 text-sm mt-0.5">{subtitle}</p>}
    </div>
    {action}
  </div>
);

const Btn = ({ onClick, children, variant = 'primary', size = 'md', className = '', type = 'button', disabled = false }) => {
  const base = 'inline-flex items-center gap-2 font-bold rounded-xl transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed';
  const sizes = { sm: 'px-3 py-1.5 text-[11px]', md: 'px-4 py-2 text-xs', lg: 'px-6 py-3 text-sm' };
  const variants = {
    primary: 'bg-yellow-500 hover:bg-slate-900 hover:text-white text-black',
    danger: 'bg-red-50 hover:bg-red-500 hover:text-white text-red-600 border border-red-100',
    ghost: 'bg-gray-100 hover:bg-gray-200 text-gray-700',
    dark: 'bg-slate-900 hover:bg-slate-700 text-white',
    success: 'bg-green-500 hover:bg-green-600 text-white',
  };
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const Input = ({ label, value, onChange, type = 'text', placeholder = '', required = false, hint }) => (
  <div className="space-y-1.5">
    {label && (
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-slate-600 block">{label}{required && <span className="text-red-400 ml-0.5">*</span>}</label>
        {hint && <span className="text-[10px] text-gray-400">{hint}</span>}
      </div>
    )}
    <input
      type={type}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none text-sm text-slate-800 placeholder-gray-400 transition-all"
    />
  </div>
);

const Textarea = ({ label, value, onChange, rows = 3, placeholder = '', hint }) => (
  <div className="space-y-1.5">
    {label && (
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-slate-600 block">{label}</label>
        {hint && <span className="text-[10px] text-gray-400">{hint}</span>}
      </div>
    )}
    <textarea
      value={value}
      onChange={e => onChange(e.target.value)}
      rows={rows}
      placeholder={placeholder}
      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none text-sm text-slate-800 placeholder-gray-400 resize-none transition-all"
    />
  </div>
);

// ─── IMAGE UPLOAD INPUT ───────────────────────────────────────────────────────

const uploadToServer = async (file) => {
  const fd = new FormData();
  fd.append('image', file);
  const res = await fetch('/api/upload', {
    method: 'POST',
    body: fd,
    headers: { ...(getToken() ? { Authorization: `Bearer ${getToken()}` } : {}) },
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || `Upload failed (${res.status})`);
  }
  return res.json();
};

const ImageInput = ({ label, value, onChange, placeholder = 'https://... or /image.jpg' }) => {
  const [previewErr, setPreviewErr] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadErr, setUploadErr] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const [showLibrary, setShowLibrary] = useState(false);
  const fileRef = useRef(null);

  useEffect(() => { setPreviewErr(false); }, [value]);

  const handleUpload = async (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) { setUploadErr('Please select an image file.'); return; }
    if (file.size > 10 * 1024 * 1024) { setUploadErr('Image must be under 10 MB.'); return; }

    setUploading(true);
    setUploadErr('');
    setProgress(10);

    // Fake progress ticks while uploading
    const ticker = setInterval(() => setProgress(p => Math.min(p + 15, 85)), 300);
    try {
      const { url } = await uploadToServer(file);
      clearInterval(ticker);
      setProgress(100);
      onChange(url);
      toast('Image uploaded!');
      setTimeout(() => setProgress(0), 600);
    } catch (e) {
      clearInterval(ticker);
      setProgress(0);
      setUploadErr(e.message);
    } finally {
      setUploading(false);
    }
  };

  const handleFile = (e) => handleUpload(e.target.files[0]);
  const handleDrop = (e) => { e.preventDefault(); setDragOver(false); handleUpload(e.dataTransfer.files[0]); };

  return (
    <div className="space-y-1.5">
      {label && <label className="text-xs font-semibold text-slate-600 block">{label}</label>}

      {/* Drop zone */}
      <div
        onDragOver={e => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => !uploading && fileRef.current?.click()}
        className={`relative flex items-center gap-3 p-3 rounded-xl border-2 border-dashed cursor-pointer transition-all select-none ${dragOver ? 'border-yellow-400 bg-yellow-50' :
            uploading ? 'border-blue-200 bg-blue-50 cursor-wait' :
              'border-gray-200 bg-gray-50 hover:border-yellow-300 hover:bg-yellow-50/50'
          }`}
      >
        {/* Thumbnail */}
        <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-white border border-gray-100 flex items-center justify-center">
          {uploading ? (
            <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
          ) : value && !previewErr ? (
            <img src={value} alt="preview" className="w-full h-full object-cover" onError={() => setPreviewErr(true)} />
          ) : (
            <Image size={20} className="text-gray-300" />
          )}
        </div>

        {/* Text + progress */}
        <div className="flex-1 min-w-0">
          {uploading ? (
            <>
              <p className="text-sm text-blue-600 font-medium">Uploading…</p>
              <div className="mt-1.5 h-1.5 bg-blue-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
              </div>
            </>
          ) : (
            <>
              <p className="text-sm font-medium text-slate-700">
                {dragOver ? 'Drop to upload' : 'Click or drag & drop'}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">PNG, JPG, WebP, GIF · max 10 MB</p>
            </>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-1 flex-shrink-0" onClick={e => e.stopPropagation()}>
          <button type="button" title="Browse uploaded images"
            onClick={() => setShowLibrary(v => !v)}
            className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-400 hover:text-slate-600 transition-colors">
            <FolderOpen size={14} />
          </button>
          {value && (
            <button type="button" title="Remove image"
              onClick={() => { onChange(''); setPreviewErr(false); }}
              className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors">
              <X size={14} />
            </button>
          )}
        </div>

        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
      </div>

      {/* Image library picker */}
      {showLibrary && (
        <ImageLibrary onSelect={url => { onChange(url); setShowLibrary(false); }} onClose={() => setShowLibrary(false)} />
      )}

      {/* Manual URL fallback */}
      <div className="flex items-center gap-2">
        <div className="flex-1 h-px bg-gray-100" />
        <span className="text-[10px] text-gray-400 font-medium">or paste URL</span>
        <div className="flex-1 h-px bg-gray-100" />
      </div>
      <input
        type="text"
        value={value}
        onChange={e => { onChange(e.target.value); setPreviewErr(false); }}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none text-sm text-slate-800 placeholder-gray-400 transition-all"
      />

      {uploadErr && (
        <p className="text-xs text-red-500 flex items-start gap-1.5">
          <AlertCircle size={12} className="flex-shrink-0 mt-0.5" />{uploadErr}
        </p>
      )}
    </div>
  );
};

// ─── IMAGE LIBRARY ────────────────────────────────────────────────────────────

const ImageLibrary = ({ onSelect, onClose }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);
  const [search, setSearch] = useState('');

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await apiFetch('/api/uploads');
      setImages(await res.json());
    } catch { setImages([]); }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { load(); }, [load]);

  const remove = async (filename, e) => {
    e.stopPropagation();
    if (!window.confirm('Delete this image from the server?')) return;
    setDeleting(filename);
    await apiFetch(`/api/uploads/${filename}`, { method: 'DELETE' });
    setDeleting(null);
    load();
    toast('Image deleted', 'info');
  };

  const fmt = (bytes) => bytes < 1024 * 1024
    ? `${(bytes / 1024).toFixed(0)} KB`
    : `${(bytes / 1024 / 1024).toFixed(1)} MB`;

  const filtered = images.filter(img => img.filename.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="border border-gray-200 rounded-2xl bg-white shadow-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <h4 className="font-semibold text-slate-900 text-sm">Uploaded Images</h4>
        <button onClick={onClose} className="p-1 rounded-lg hover:bg-gray-100 text-gray-400"><X size={14} /></button>
      </div>
      <div className="p-3 border-b border-gray-100">
        <SearchBar value={search} onChange={setSearch} placeholder="Search images..." />
      </div>
      <div className="p-3 max-h-72 overflow-y-auto">
        {loading ? (
          <div className="flex items-center justify-center py-8 text-gray-400 text-sm gap-2">
            <div className="w-4 h-4 border-2 border-gray-300 border-t-yellow-500 rounded-full animate-spin" />
            Loading…
          </div>
        ) : filtered.length === 0 ? (
          <p className="text-center text-gray-400 text-sm py-8">
            {images.length === 0 ? 'No images uploaded yet.' : 'No images match your search.'}
          </p>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {filtered.map(img => (
              <div key={img.filename}
                onClick={() => onSelect(img.url)}
                className="relative group cursor-pointer rounded-xl overflow-hidden border-2 border-transparent hover:border-yellow-400 transition-all aspect-square bg-gray-100">
                <img src={img.url} alt={img.filename} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-end justify-between p-1.5 opacity-0 group-hover:opacity-100">
                  <span className="text-white text-[9px] font-medium bg-black/50 rounded px-1 truncate max-w-[70%]">{fmt(img.size)}</span>
                  <button
                    onClick={e => remove(img.filename, e)}
                    disabled={deleting === img.filename}
                    className="p-1 bg-red-500 rounded text-white hover:bg-red-600 transition-colors">
                    <Trash2 size={10} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="px-4 py-2.5 border-t border-gray-100 text-xs text-gray-400">
        {images.length} image{images.length !== 1 ? 's' : ''} on server · Click any image to use it
      </div>
    </div>
  );
};

const Card = ({ children, className = '' }) => (
  <div className={`bg-white border border-gray-100 rounded-2xl p-6 shadow-sm ${className}`}>{children}</div>
);

// Unsaved changes banner
const UnsavedBanner = ({ dirty, onSave, onDiscard }) => dirty ? (
  <div className="sticky top-0 z-10 bg-yellow-50 border border-yellow-200 rounded-2xl px-5 py-3 mb-4 flex items-center justify-between gap-4">
    <div className="flex items-center gap-2 text-yellow-800 text-sm font-semibold">
      <AlertCircle size={16} className="text-yellow-600" />
      You have unsaved changes
    </div>
    <div className="flex gap-2">
      <Btn onClick={onDiscard} variant="ghost" size="sm"><X size={12} /> Discard</Btn>
      <Btn onClick={onSave} variant="primary" size="sm"><Save size={12} /> Save Now</Btn>
    </div>
  </div>
) : null;

// Search bar for list views
const SearchBar = ({ value, onChange, placeholder = 'Search...' }) => (
  <div className="relative">
    <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none text-sm text-slate-800 placeholder-gray-400 transition-all"
    />
    {value && (
      <button onClick={() => onChange('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
        <X size={14} />
      </button>
    )}
  </div>
);

// ─── DASHBOARD ────────────────────────────────────────────────────────────────

const Dashboard = ({ onNavigate }) => {
  const { data } = useAdmin();
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    apiFetch('/api/contact').then(r => r.json()).then(subs => {
      setUnreadCount(subs.filter(s => !s.read).length);
    }).catch(() => { });
  }, []);

  const counts = [
    { label: 'Services', value: data.services.length, icon: Briefcase, color: 'bg-blue-50 text-blue-600', tab: 'services' },
    { label: 'Projects', value: data.projects.length, icon: FolderOpen, color: 'bg-green-50 text-green-600', tab: 'projects' },
    { label: 'Blog Posts', value: data.blogs.length, icon: BookOpen, color: 'bg-purple-50 text-purple-600', tab: 'blogs' },
    { label: 'Team Members', value: data.team.length, icon: Users, color: 'bg-orange-50 text-orange-600', tab: 'team' },
    { label: 'Job Openings', value: data.careers.length, icon: UserCheck, color: 'bg-yellow-50 text-yellow-600', tab: 'careers' },
    { label: 'FAQs', value: data.faqs.length, icon: HelpCircle, color: 'bg-pink-50 text-pink-600', tab: 'faqs' },
    { label: 'Testimonials', value: data.testimonials.length, icon: Star, color: 'bg-indigo-50 text-indigo-600', tab: 'testimonials' },
    { label: 'Partners', value: (data.trustedPartners || []).length, icon: Zap, color: 'bg-teal-50 text-teal-600', tab: 'partners' },
  ];

  const quickActions = [
    { label: 'Edit Hero Banner', desc: 'Change headline & buttons', icon: Home, tab: 'hero', color: 'border-blue-100 hover:border-blue-300 hover:bg-blue-50' },
    { label: 'Update Contact Info', desc: 'Phone, email, address', icon: Phone, tab: 'contact', color: 'border-green-100 hover:border-green-300 hover:bg-green-50' },
    { label: 'Add a Blog Post', desc: 'Publish new article', icon: BookOpen, tab: 'blogs', color: 'border-purple-100 hover:border-purple-300 hover:bg-purple-50' },
    { label: 'Add a Project', desc: 'Showcase new work', icon: FolderOpen, tab: 'projects', color: 'border-orange-100 hover:border-orange-300 hover:bg-orange-50' },
    { label: 'Post a Job', desc: 'Add career opening', icon: UserCheck, tab: 'careers', color: 'border-yellow-100 hover:border-yellow-300 hover:bg-yellow-50' },
    { label: 'Form Submissions', desc: unreadCount > 0 ? `${unreadCount} unread message${unreadCount > 1 ? 's' : ''}` : 'View contact messages', icon: Inbox, tab: 'inbox', color: unreadCount > 0 ? 'border-red-200 hover:border-red-300 hover:bg-red-50 bg-red-50/50' : 'border-pink-100 hover:border-pink-300 hover:bg-pink-50' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-black text-slate-900">Welcome back 👋</h2>
        <p className="text-gray-500 text-sm mt-1">Here's an overview of your website content.</p>
      </div>

      {/* Content counts */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {counts.map(({ label, value, icon: Icon, color, tab }) => (
          <button key={label} onClick={() => onNavigate(tab)}
            className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all text-left group">
            <div className={`w-9 h-9 rounded-xl ${color} flex items-center justify-center mb-3`}>
              <Icon size={16} />
            </div>
            <div className="text-2xl font-black text-slate-900">{value}</div>
            <div className="text-xs text-gray-500 font-medium mt-0.5 flex items-center gap-1">
              {label}
              <ChevronRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </button>
        ))}
      </div>

      {/* Quick actions */}
      <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Quick Actions</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
        {quickActions.map(({ label, desc, icon: Icon, tab, color }) => (
          <button key={tab} onClick={() => onNavigate(tab)}
            className={`flex items-center gap-4 p-4 bg-white border rounded-2xl transition-all text-left hover:shadow-sm ${color}`}>
            <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
              <Icon size={18} className="text-slate-600" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">{label}</div>
              <div className="text-xs text-gray-500">{desc}</div>
            </div>
            <ChevronRight size={14} className="text-gray-300 ml-auto flex-shrink-0" />
          </button>
        ))}
      </div>

      {/* Company stats preview */}
      <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Live Website Stats</h3>
      <Card>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {Object.entries(data.companyStats).map(([k, v]) => (
            <div key={k} className="bg-gray-50 rounded-xl p-3 text-center">
              <div className="text-lg font-black text-yellow-600">{v}</div>
              <div className="text-[11px] text-gray-500 capitalize mt-0.5">{k.replace(/([A-Z])/g, ' $1')}</div>
            </div>
          ))}
        </div>
        <button onClick={() => onNavigate('stats')} className="mt-3 text-xs text-yellow-600 font-semibold hover:underline flex items-center gap-1">
          Edit stats <ChevronRight size={12} />
        </button>
      </Card>
    </div>
  );
};

// ─── SERVICES MANAGER ─────────────────────────────────────────────────────────

const ServicesManager = () => {
  const { data, update } = useAdmin();
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({});
  const [adding, setAdding] = useState(false);
  const [search, setSearch] = useState('');

  const startEdit = (item) => { setEditing(item.id); setForm({ ...item }); setAdding(false); };
  const startAdd = () => { setAdding(true); setEditing(null); setForm({ id: Date.now(), title: '', desc: '', img: '' }); };
  const cancel = () => { setEditing(null); setAdding(false); setForm({}); };

  const save = () => {
    if (!form.title || !form.desc) return;
    if (adding) update('services', [...data.services, form]);
    else update('services', data.services.map(s => s.id === editing ? form : s));
    toast(adding ? 'Service added!' : 'Service updated!');
    cancel();
  };

  const remove = (id) => {
    if (window.confirm('Delete this service?')) { update('services', data.services.filter(s => s.id !== id)); toast('Service deleted', 'info'); }
  };

  const filtered = data.services.filter(s => s.title.toLowerCase().includes(search.toLowerCase()));
  const isFormOpen = editing !== null || adding;

  return (
    <div>
      <SectionHeader title="Services" subtitle="Manage the services shown on the website"
        action={<Btn onClick={startAdd} variant="primary"><Plus size={14} /> Add Service</Btn>} />

      {isFormOpen && (
        <Card className="mb-6 border-yellow-200 bg-yellow-50">
          <h3 className="font-bold text-slate-900 mb-4">{adding ? 'Add New Service' : 'Edit Service'}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Title" value={form.title || ''} onChange={v => setForm(p => ({ ...p, title: v }))} required />
            <ImageInput label="Image" value={form.img || ''} onChange={v => setForm(p => ({ ...p, img: v }))} />
          </div>
          <div className="mt-4">
            <Textarea label="Description" value={form.desc || ''} onChange={v => setForm(p => ({ ...p, desc: v }))} rows={2} />
          </div>
          <div className="flex gap-3 mt-4">
            <Btn onClick={save} variant="primary"><Save size={14} /> Save</Btn>
            <Btn onClick={cancel} variant="ghost"><X size={14} /> Cancel</Btn>
          </div>
        </Card>
      )}

      <div className="mb-4"><SearchBar value={search} onChange={setSearch} placeholder="Search services..." /></div>

      <div className="space-y-2">
        {filtered.map((s) => (
          <Card key={s.id} className="flex items-center gap-4 !py-4">
            <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
              {s.img ? <img src={s.img} alt={s.title} className="w-full h-full object-cover" onError={e => e.target.style.display = 'none'} /> : <Briefcase size={20} className="m-auto mt-3 text-gray-300" />}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-slate-900 text-sm">{s.title}</h4>
              <p className="text-gray-400 text-xs mt-0.5 line-clamp-1">{s.desc}</p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <Btn onClick={() => startEdit(s)} variant="ghost" size="sm"><Edit3 size={12} /> Edit</Btn>
              <Btn onClick={() => remove(s.id)} variant="danger" size="sm"><Trash2 size={12} /></Btn>
            </div>
          </Card>
        ))}
        {filtered.length === 0 && <p className="text-center text-gray-400 py-8 text-sm">No services match your search.</p>}
      </div>
    </div>
  );
};

// ─── PROJECTS MANAGER ─────────────────────────────────────────────────────────

const CATEGORIES = ['Residential', 'Commercial', 'Industrial', 'Infrastructure'];

const ProjectsManager = () => {
  const { data, update } = useAdmin();
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({});
  const [adding, setAdding] = useState(false);
  const [search, setSearch] = useState('');
  const [filterCat, setFilterCat] = useState('All');

  const startEdit = (item) => { setEditing(item.id); setForm({ ...item }); setAdding(false); };
  const startAdd = () => { setAdding(true); setEditing(null); setForm({ id: Date.now(), title: '', category: 'Residential', location: '', image: '' }); };
  const cancel = () => { setEditing(null); setAdding(false); setForm({}); };

  const save = () => {
    if (!form.title) return;
    if (adding) update('projects', [...data.projects, form]);
    else update('projects', data.projects.map(p => p.id === editing ? form : p));
    toast(adding ? 'Project added!' : 'Project updated!');
    cancel();
  };

  const remove = (id) => {
    if (window.confirm('Delete this project?')) { update('projects', data.projects.filter(p => p.id !== id)); toast('Project deleted', 'info'); }
  };

  const filtered = data.projects.filter(p =>
    (filterCat === 'All' || p.category === filterCat) &&
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <SectionHeader title="Projects" subtitle="Manage the project portfolio"
        action={<Btn onClick={startAdd} variant="primary"><Plus size={14} /> Add Project</Btn>} />

      {(editing !== null || adding) && (
        <Card className="mb-6 border-yellow-200 bg-yellow-50">
          <h3 className="font-bold text-slate-900 mb-4">{adding ? 'Add New Project' : 'Edit Project'}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Title" value={form.title || ''} onChange={v => setForm(p => ({ ...p, title: v }))} required />
            <Input label="Location" value={form.location || ''} onChange={v => setForm(p => ({ ...p, location: v }))} placeholder="e.g. Pune, Maharashtra" />
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-600 block">Category</label>
              <select value={form.category || 'Residential'} onChange={e => setForm(p => ({ ...p, category: e.target.value }))}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:border-yellow-400 outline-none text-sm">
                {CATEGORIES.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <Input label="Year" value={form.year || ''} onChange={v => setForm(p => ({ ...p, year: v }))} placeholder="e.g. 2024" />
          </div>
          <div className="mt-4">
            <ImageInput label="Project Image" value={form.image || ''} onChange={v => setForm(p => ({ ...p, image: v }))} />
          </div>
          <div className="mt-4">
            <Textarea label="Description" value={form.description || ''} onChange={v => setForm(p => ({ ...p, description: v }))} rows={2} placeholder="Brief project description..." />
          </div>
          <div className="flex gap-3 mt-4">
            <Btn onClick={save} variant="primary"><Save size={14} /> Save</Btn>
            <Btn onClick={cancel} variant="ghost"><X size={14} /> Cancel</Btn>
          </div>
        </Card>
      )}

      <div className="flex gap-3 mb-4">
        <div className="flex-1"><SearchBar value={search} onChange={setSearch} placeholder="Search projects..." /></div>
        <select value={filterCat} onChange={e => setFilterCat(e.target.value)}
          className="px-3 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-slate-700 focus:border-yellow-400 outline-none">
          <option value="All">All Categories</option>
          {CATEGORIES.map(c => <option key={c}>{c}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((p) => (
          <Card key={p.id} className="overflow-hidden !p-0">
            <div className="h-40 bg-gray-100 overflow-hidden relative">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" onError={e => { e.target.style.display = 'none'; }} />
              <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest text-yellow-600 bg-white/90 px-2 py-0.5 rounded-full">{p.category}</span>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-slate-900 text-sm">{p.title}</h4>
              <p className="text-gray-400 text-xs mt-0.5">{p.location}{p.year ? ` · ${p.year}` : ''}</p>
              <div className="flex gap-2 mt-3">
                <Btn onClick={() => startEdit(p)} variant="ghost" size="sm"><Edit3 size={12} /> Edit</Btn>
                <Btn onClick={() => remove(p.id)} variant="danger" size="sm"><Trash2 size={12} /></Btn>
              </div>
            </div>
          </Card>
        ))}
        {filtered.length === 0 && <p className="col-span-3 text-center text-gray-400 py-8 text-sm">No projects match your search.</p>}
      </div>
    </div>
  );
};

// ─── BLOGS MANAGER ────────────────────────────────────────────────────────────

const BLOG_CATEGORIES = ['BIM', 'Structural Engineering', 'Architecture', 'Technology', 'Sustainability', 'Education', 'Careers', 'Case Study', 'News'];

const slugify = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// Inline markdown preview renderer (mirrors BlogDetailPage logic, lightweight)
const PreviewContent = ({ text }) => {
  if (!text) return <p className="text-gray-400 italic text-sm">Nothing to preview yet.</p>;
  return (
    <div className="prose max-w-none text-sm leading-relaxed">
      {text.split('\n').map((line, i) => {
        if (!line.trim()) return <div key={i} className="h-3" />;
        if (line.startsWith('## ')) return <h2 key={i} className="text-lg font-bold text-slate-900 mt-5 mb-2">{line.slice(3)}</h2>;
        if (line.startsWith('### ')) return <h3 key={i} className="text-base font-bold text-slate-900 mt-4 mb-1">{line.slice(4)}</h3>;
        if (line.startsWith('# ')) return <h1 key={i} className="text-xl font-bold text-slate-900 mt-5 mb-2">{line.slice(2)}</h1>;
        if (/^\d+\.\s/.test(line)) return <p key={i} className="text-gray-700 ml-4">• {line.replace(/^\d+\.\s/, '')}</p>;
        if (/^[-*]\s/.test(line)) return <p key={i} className="text-gray-700 ml-4">• {line.replace(/^[-*]\s/, '')}</p>;
        // inline bold/italic
        const formatted = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>');
        return <p key={i} className="text-gray-700 mb-2" dangerouslySetInnerHTML={{ __html: formatted }} />;
      })}
    </div>
  );
};

// Formatting toolbar button
const FmtBtn = ({ label, title, onClick }) => (
  <button type="button" title={title} onClick={onClick}
    className="px-2 py-1 text-xs font-mono font-bold bg-white border border-gray-200 rounded hover:bg-yellow-50 hover:border-yellow-300 text-slate-700 transition-all">
    {label}
  </button>
);

const BlogsManager = () => {
  const { data, update } = useAdmin();
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({});
  const [adding, setAdding] = useState(false);
  const [search, setSearch] = useState('');
  const [filterCat, setFilterCat] = useState('All');
  const [activeTab, setActiveTab] = useState('basic');
  const [preview, setPreview] = useState(false);
  const contentRef = useRef(null);

  const blankForm = () => ({
    id: Date.now(),
    title: '',
    slug: '',
    desc: '',
    img: '',
    author: '',
    date: new Date().toISOString().split('T')[0],
    category: '',
    tags: '',
    content: '',
    published: true,
    seoTitle: '',
    seoDesc: '',
    ogImage: '',
    canonicalUrl: '',
  });

  const startEdit = (item) => {
    setEditing(item.id);
    setForm({ ...item, tags: Array.isArray(item.tags) ? item.tags.join(', ') : (item.tags || '') });
    setAdding(false);
    setActiveTab('basic');
    setPreview(false);
  };
  const startAdd = () => { setAdding(true); setEditing(null); setForm(blankForm()); setActiveTab('basic'); setPreview(false); };
  const cancel = () => { setEditing(null); setAdding(false); setForm({}); };

  const save = () => {
    if (!form.title) return toast('Title is required', 'error');
    const finalSlug = form.slug || slugify(form.title);
    const finalTags = typeof form.tags === 'string'
      ? form.tags.split(',').map(t => t.trim()).filter(Boolean)
      : (form.tags || []);
    const entry = { ...form, slug: finalSlug, tags: finalTags };
    if (adding) update('blogs', [...data.blogs, entry]);
    else update('blogs', data.blogs.map(b => b.id === editing ? entry : b));
    toast(adding ? 'Blog post added!' : 'Blog post updated!');
    cancel();
  };

  const remove = (id) => {
    if (window.confirm('Delete this blog post?')) { update('blogs', data.blogs.filter(b => b.id !== id)); toast('Blog post deleted', 'info'); }
  };

  const togglePublish = (id) => {
    update('blogs', data.blogs.map(b => b.id === id ? { ...b, published: !b.published } : b));
  };

  // Insert formatting at cursor position in the content textarea
  const insertFormat = (before, after = '', placeholder = '') => {
    const el = contentRef.current;
    if (!el) return;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const selected = form.content.slice(start, end) || placeholder;
    const newContent = form.content.slice(0, start) + before + selected + after + form.content.slice(end);
    setForm(p => ({ ...p, content: newContent }));
    setTimeout(() => {
      el.focus();
      el.setSelectionRange(start + before.length, start + before.length + selected.length);
    }, 0);
  };

  const wordCount = (form.content || '').split(/\s+/).filter(Boolean).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));
  const seoTitleLen = (form.seoTitle || '').length;
  const seoDescLen = (form.seoDesc || '').length;

  const cats = ['All', ...BLOG_CATEGORIES];
  const filtered = data.blogs.filter(b => {
    const matchSearch = b.title.toLowerCase().includes(search.toLowerCase()) || (b.author || '').toLowerCase().includes(search.toLowerCase());
    const matchCat = filterCat === 'All' || b.category === filterCat;
    return matchSearch && matchCat;
  });

  const isFormOpen = editing !== null || adding;

  const tabCls = (t) => `px-4 py-2 text-xs font-bold rounded-lg transition-all ${activeTab === t ? 'bg-yellow-500 text-black' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`;

  return (
    <div>
      <SectionHeader title="Blog Posts" subtitle={`${data.blogs.length} posts · ${data.blogs.filter(b => b.published !== false).length} published`}
        action={<Btn onClick={startAdd} variant="primary"><Plus size={14} /> Add Blog Post</Btn>} />

      {isFormOpen && (
        <Card className="mb-6 border-yellow-200 bg-yellow-50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-900">{adding ? 'Add New Blog Post' : 'Edit Blog Post'}</h3>
            <div className="flex gap-1">
              <button type="button" className={tabCls('basic')} onClick={() => setActiveTab('basic')}>Basic Info</button>
              <button type="button" className={tabCls('content')} onClick={() => setActiveTab('content')}>Content</button>
              <button type="button" className={tabCls('seo')} onClick={() => setActiveTab('seo')}>SEO & Meta</button>
            </div>
          </div>

          {activeTab === 'basic' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="Title" value={form.title || ''} onChange={v => setForm(p => ({ ...p, title: v, slug: p.slug || slugify(v) }))} required placeholder="Blog post title..." />
                <Input label="Author" value={form.author || ''} onChange={v => setForm(p => ({ ...p, author: v }))} placeholder="e.g. Prof. Sandeep Pingale" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-600 block">Category</label>
                  <select value={form.category || ''} onChange={e => setForm(p => ({ ...p, category: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none text-sm text-slate-800 transition-all">
                    <option value="">Select category...</option>
                    {BLOG_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <Input label="Date" type="date" value={form.date || ''} onChange={v => setForm(p => ({ ...p, date: v }))} />
              </div>
              <ImageInput label="Cover Image" value={form.img || ''} onChange={v => setForm(p => ({ ...p, img: v }))} />
              <Textarea label="Excerpt / Description" value={form.desc || ''} onChange={v => setForm(p => ({ ...p, desc: v }))} rows={2} placeholder="A short summary shown on the blog listing..." />
              <Input label="Tags" value={form.tags || ''} onChange={v => setForm(p => ({ ...p, tags: v }))} placeholder="BIM, construction, technology (comma-separated)" hint="comma-separated" />
              <div className="flex items-center gap-3">
                <label className="text-xs font-semibold text-slate-600">Status</label>
                <button type="button" onClick={() => setForm(p => ({ ...p, published: !p.published }))}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${form.published !== false ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                  <span className={`w-2 h-2 rounded-full ${form.published !== false ? 'bg-green-500' : 'bg-gray-400'}`} />
                  {form.published !== false ? 'Published' : 'Draft'}
                </button>
              </div>
            </div>
          )}

          {activeTab === 'content' && (
            <div className="space-y-3">
              {/* Toolbar */}
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex flex-wrap gap-1">
                  <FmtBtn label="H1" title="Heading 1" onClick={() => insertFormat('# ', '', 'Heading')} />
                  <FmtBtn label="H2" title="Heading 2" onClick={() => insertFormat('## ', '', 'Heading')} />
                  <FmtBtn label="H3" title="Heading 3" onClick={() => insertFormat('### ', '', 'Heading')} />
                  <span className="w-px bg-gray-200 mx-1 self-stretch" />
                  <FmtBtn label="B" title="Bold" onClick={() => insertFormat('**', '**', 'bold text')} />
                  <FmtBtn label="I" title="Italic" onClick={() => insertFormat('*', '*', 'italic text')} />
                  <span className="w-px bg-gray-200 mx-1 self-stretch" />
                  <FmtBtn label="• List" title="Bullet list item" onClick={() => insertFormat('- ', '', 'List item')} />
                  <FmtBtn label="1. List" title="Numbered list item" onClick={() => insertFormat('1. ', '', 'List item')} />
                  <span className="w-px bg-gray-200 mx-1 self-stretch" />
                  <FmtBtn label="¶" title="New paragraph (blank line)" onClick={() => insertFormat('\n\n', '', '')} />
                </div>
                <button type="button" onClick={() => setPreview(v => !v)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${preview ? 'bg-slate-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                  <Eye size={12} /> {preview ? 'Edit' : 'Preview'}
                </button>
              </div>
              {/* Syntax reference */}
              <div className="flex flex-wrap gap-3 text-[10px] text-gray-400 bg-white/60 rounded-lg px-3 py-2 border border-gray-100">
                <span><code className="text-slate-600"># H1</code> &nbsp;<code className="text-slate-600">## H2</code> &nbsp;<code className="text-slate-600">### H3</code></span>
                <span><code className="text-slate-600">**bold**</code></span>
                <span><code className="text-slate-600">*italic*</code></span>
                <span><code className="text-slate-600">- item</code> bullet</span>
                <span><code className="text-slate-600">1. item</code> numbered</span>
                <span>blank line = new paragraph</span>
              </div>
              {preview ? (
                <div className="min-h-[400px] bg-white rounded-xl border border-gray-200 p-5 overflow-y-auto">
                  <PreviewContent text={form.content} />
                </div>
              ) : (
                <textarea
                  ref={contentRef}
                  value={form.content || ''}
                  onChange={e => setForm(p => ({ ...p, content: e.target.value }))}
                  rows={22}
                  placeholder={"Write the full blog article here...\n\nUse # for headings, **bold**, *italic*, - for bullets, 1. for numbered lists.\n\nBlank lines create new paragraphs."}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none text-sm text-slate-800 placeholder-gray-400 resize-y transition-all font-mono leading-relaxed"
                />
              )}
              {/* Stats bar */}
              <div className="flex items-center gap-4 text-[11px] text-gray-400">
                <span>{(form.content || '').length} chars</span>
                <span>{wordCount} words</span>
                <span>~{readTime} min read</span>
                {wordCount < 300 && <span className="text-amber-500 font-semibold">⚠ Short — aim for 500+ words for better SEO</span>}
                {wordCount >= 300 && wordCount < 600 && <span className="text-blue-500 font-semibold">Good length</span>}
                {wordCount >= 600 && <span className="text-green-600 font-semibold">✓ Great length for SEO</span>}
              </div>
            </div>
          )}

          {activeTab === 'seo' && (
            <div className="space-y-5">
              {/* URL Slug */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-slate-600">URL Slug <span className="text-gray-400 font-normal">(auto-generated from title)</span></label>
                  <button type="button" onClick={() => setForm(p => ({ ...p, slug: slugify(p.title || '') }))}
                    className="text-[10px] text-yellow-600 font-bold hover:underline">Re-generate from title</button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 font-mono whitespace-nowrap">/pages/blog/</span>
                  <input type="text" value={form.slug || ''}
                    onChange={e => setForm(p => ({ ...p, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-') }))}
                    placeholder="your-article-slug"
                    className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none text-sm font-mono text-slate-800 transition-all" />
                </div>
                <p className="text-[11px] text-gray-400">Full URL: <span className="text-yellow-600 font-mono">{window.location.origin}/pages/blog/{form.slug || slugify(form.title || 'your-title')}</span></p>
              </div>
              {/* SEO Title */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-slate-600">SEO Title <span className="text-gray-400 font-normal">(overrides page &lt;title&gt;)</span></label>
                  <span className={`text-[10px] font-bold ${seoTitleLen === 0 ? 'text-gray-400' : seoTitleLen <= 60 ? 'text-green-600' : 'text-red-500'}`}>
                    {seoTitleLen}/60 {seoTitleLen > 60 ? '— too long' : seoTitleLen > 0 ? '✓' : '(uses article title)'}
                  </span>
                </div>
                <input type="text" value={form.seoTitle || ''}
                  onChange={e => setForm(p => ({ ...p, seoTitle: e.target.value }))}
                  placeholder={form.title || 'Leave blank to use article title'}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none text-sm text-slate-800 transition-all" />
                {seoTitleLen > 0 && (
                  <div className="h-1 rounded-full bg-gray-100 overflow-hidden">
                    <div className={`h-full rounded-full transition-all ${seoTitleLen <= 60 ? 'bg-green-400' : 'bg-red-400'}`} style={{ width: `${Math.min(100, (seoTitleLen / 60) * 100)}%` }} />
                  </div>
                )}
              </div>
              {/* Meta Description */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-slate-600">Meta Description <span className="text-gray-400 font-normal">(shown in search results)</span></label>
                  <span className={`text-[10px] font-bold ${seoDescLen === 0 ? 'text-gray-400' : seoDescLen <= 160 ? 'text-green-600' : 'text-red-500'}`}>
                    {seoDescLen}/160 {seoDescLen > 160 ? '— too long' : seoDescLen > 0 ? '✓' : '(uses excerpt)'}
                  </span>
                </div>
                <textarea value={form.seoDesc || ''}
                  onChange={e => setForm(p => ({ ...p, seoDesc: e.target.value }))}
                  rows={3} placeholder={form.desc || 'Leave blank to use the excerpt as meta description'}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none text-sm text-slate-800 placeholder-gray-400 resize-none transition-all" />
                {seoDescLen > 0 && (
                  <div className="h-1 rounded-full bg-gray-100 overflow-hidden">
                    <div className={`h-full rounded-full transition-all ${seoDescLen <= 160 ? 'bg-green-400' : 'bg-red-400'}`} style={{ width: `${Math.min(100, (seoDescLen / 160) * 100)}%` }} />
                  </div>
                )}
              </div>
              {/* OG Image */}
              <ImageInput label="Social Share Image (OG Image)" value={form.ogImage || ''}
                onChange={v => setForm(p => ({ ...p, ogImage: v }))} placeholder="https://... (recommended: 1200×630px)" />
              <p className="text-[11px] text-gray-400 -mt-2">Used when shared on social media. Defaults to cover image if blank.</p>
              {/* Canonical URL */}
              <Input label="Canonical URL" value={form.canonicalUrl || ''}
                onChange={v => setForm(p => ({ ...p, canonicalUrl: v }))}
                placeholder="https://e-construct.in/pages/blog/..." hint="optional" />
              {/* SERP Preview */}
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">Search Result Preview</p>
                <div className="space-y-0.5">
                  <p className="text-[13px] text-blue-700 font-medium truncate">{form.seoTitle || form.title || 'Your Article Title'}</p>
                  <p className="text-[11px] text-green-700 font-mono truncate">{window.location.origin}/pages/blog/{form.slug || slugify(form.title || 'your-title')}</p>
                  <p className="text-[12px] text-gray-600 line-clamp-2 leading-relaxed">{form.seoDesc || form.desc || 'Your meta description will appear here. Write a compelling summary that encourages clicks from search results.'}</p>
                </div>
              </div>
              {/* SEO checklist */}
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">SEO Checklist</p>
                <div className="space-y-1.5">
                  {[
                    { ok: !!form.title, label: 'Article title set' },
                    { ok: !!form.slug, label: 'URL slug set' },
                    { ok: !!(form.desc || form.seoDesc), label: 'Meta description / excerpt set' },
                    { ok: seoTitleLen === 0 || seoTitleLen <= 60, label: 'SEO title ≤ 60 characters' },
                    { ok: seoDescLen === 0 || seoDescLen <= 160, label: 'Meta description ≤ 160 characters' },
                    { ok: !!form.img, label: 'Cover image set' },
                    { ok: wordCount >= 300, label: 'Article has 300+ words' },
                    { ok: !!(form.tags && form.tags.length > 0), label: 'Tags added' },
                    { ok: !!form.category, label: 'Category selected' },
                  ].map(({ ok, label }) => (
                    <div key={label} className="flex items-center gap-2 text-xs">
                      <span className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold ${ok ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                        {ok ? '✓' : '○'}
                      </span>
                      <span className={ok ? 'text-slate-700' : 'text-gray-400'}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-3 mt-5 pt-4 border-t border-yellow-200">
            <Btn onClick={save} variant="primary"><Save size={14} /> Save Post</Btn>
            <Btn onClick={cancel} variant="ghost"><X size={14} /> Cancel</Btn>
          </div>
        </Card>
      )}

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="flex-1"><SearchBar value={search} onChange={setSearch} placeholder="Search by title or author..." /></div>
        <div className="flex gap-1 flex-wrap">
          {cats.map(c => (
            <button key={c} onClick={() => setFilterCat(c)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${filterCat === c ? 'bg-slate-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        {filtered.map((b) => (
          <Card key={b.id} className="flex items-center gap-4 !py-3">
            <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
              {b.img ? <img src={b.img} alt={b.title} className="w-full h-full object-cover" onError={e => e.target.style.display = 'none'} /> : <BookOpen size={18} className="m-auto mt-4 text-gray-300" />}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className="font-semibold text-slate-900 text-sm">{b.title}</h4>
                {b.category && <span className="text-[10px] bg-yellow-100 text-yellow-700 font-bold px-2 py-0.5 rounded-full">{b.category}</span>}
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${b.published !== false ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                  {b.published !== false ? 'Published' : 'Draft'}
                </span>
                {!b.slug && <span className="text-[10px] bg-red-50 text-red-500 font-bold px-2 py-0.5 rounded-full">No slug</span>}
              </div>
              <p className="text-gray-400 text-xs mt-0.5 flex items-center gap-2 flex-wrap">
                {b.author && <span>{b.author}</span>}
                {b.author && b.date && <span>·</span>}
                {b.date && <span>{new Date(b.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>}
                {b.content && <span className="text-gray-300">· ~{Math.max(1, Math.ceil(b.content.split(/\s+/).filter(Boolean).length / 200))} min read</span>}
                {b.slug && <span className="font-mono text-gray-300 text-[10px]">/{b.slug}</span>}
              </p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button onClick={() => togglePublish(b.id)} title={b.published !== false ? 'Unpublish' : 'Publish'}
                className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-slate-600 transition-colors">
                <Eye size={14} />
              </button>
              {b.slug && (
                <a href={`/pages/blog/${b.slug}`} target="_blank" rel="noreferrer"
                  className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-slate-600 transition-colors" title="View article">
                  <Globe size={14} />
                </a>
              )}
              <Btn onClick={() => startEdit(b)} variant="ghost" size="sm"><Edit3 size={12} /> Edit</Btn>
              <Btn onClick={() => remove(b.id)} variant="danger" size="sm"><Trash2 size={12} /></Btn>
            </div>
          </Card>
        ))}
        {filtered.length === 0 && <p className="text-center text-gray-400 py-8 text-sm">No blog posts match your search.</p>}
      </div>
    </div>
  );
};

// ─── TEAM MANAGER ─────────────────────────────────────────────────────────────

const TeamManager = () => {
  const { data, update } = useAdmin();
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({});
  const [adding, setAdding] = useState(false);
  const [search, setSearch] = useState('');

  const startEdit = (item) => { setEditing(item.id); setForm({ ...item }); setAdding(false); };
  const startAdd = () => { setAdding(true); setEditing(null); setForm({ id: Date.now(), name: '', position: '', image: '', bio: '' }); };
  const cancel = () => { setEditing(null); setAdding(false); setForm({}); };

  const save = () => {
    if (!form.name) return;
    if (adding) update('team', [...data.team, form]);
    else update('team', data.team.map(t => t.id === editing ? form : t));
    toast(adding ? 'Team member added!' : 'Team member updated!');
    cancel();
  };

  const remove = (id) => {
    if (window.confirm('Remove this team member?')) { update('team', data.team.filter(t => t.id !== id)); toast('Team member removed', 'info'); }
  };

  const filtered = data.team.filter(t => t.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <SectionHeader title="Team Members" subtitle="Manage founders and team profiles"
        action={<Btn onClick={startAdd} variant="primary"><Plus size={14} /> Add Member</Btn>} />

      {(editing !== null || adding) && (
        <Card className="mb-6 border-yellow-200 bg-yellow-50">
          <h3 className="font-bold text-slate-900 mb-4">{adding ? 'Add Team Member' : 'Edit Team Member'}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Full Name" value={form.name || ''} onChange={v => setForm(p => ({ ...p, name: v }))} required />
            <Input label="Position / Title" value={form.position || ''} onChange={v => setForm(p => ({ ...p, position: v }))} placeholder="e.g. Founder & CEO" />
            <ImageInput label="Photo" value={form.image || ''} onChange={v => setForm(p => ({ ...p, image: v }))} />
            <Input label="LinkedIn URL" value={form.linkedin || ''} onChange={v => setForm(p => ({ ...p, linkedin: v }))} placeholder="https://linkedin.com/in/..." />
          </div>
          <div className="mt-4">
            <Textarea label="Bio" value={form.bio || ''} onChange={v => setForm(p => ({ ...p, bio: v }))} rows={2} placeholder="Brief professional bio..." />
          </div>
          <div className="flex gap-3 mt-4">
            <Btn onClick={save} variant="primary"><Save size={14} /> Save</Btn>
            <Btn onClick={cancel} variant="ghost"><X size={14} /> Cancel</Btn>
          </div>
        </Card>
      )}

      <div className="mb-4"><SearchBar value={search} onChange={setSearch} placeholder="Search team members..." /></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((t) => (
          <Card key={t.id} className="text-center">
            <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full object-cover mx-auto mb-3 bg-gray-100 border-2 border-gray-100" onError={e => { e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(t.name); }} />
            <h4 className="font-semibold text-slate-900 text-sm">{t.name}</h4>
            <p className="text-yellow-600 text-xs font-semibold mt-0.5">{t.position}</p>
            <p className="text-gray-400 text-xs mt-2 line-clamp-2">{t.bio}</p>
            <div className="flex gap-2 justify-center mt-3">
              <Btn onClick={() => startEdit(t)} variant="ghost" size="sm"><Edit3 size={12} /> Edit</Btn>
              <Btn onClick={() => remove(t.id)} variant="danger" size="sm"><Trash2 size={12} /></Btn>
            </div>
          </Card>
        ))}
        {filtered.length === 0 && <p className="col-span-3 text-center text-gray-400 py-8 text-sm">No team members match your search.</p>}
      </div>
    </div>
  );
};

// ─── CAREERS MANAGER ──────────────────────────────────────────────────────────

const CareersManager = () => {
  const { data, update } = useAdmin();
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({});
  const [adding, setAdding] = useState(false);

  const startEdit = (item) => { setEditing(item.id); setForm({ ...item }); setAdding(false); };
  const startAdd = () => { setAdding(true); setEditing(null); setForm({ id: Date.now(), title: '', dept: '', location: '', type: 'Full-Time', experience: '', desc: '', responsibilities: [], requirements: [] }); };
  const cancel = () => { setEditing(null); setAdding(false); setForm({}); };

  const save = () => {
    if (!form.title) return;
    if (adding) update('careers', [...data.careers, form]);
    else update('careers', data.careers.map(c => c.id === editing ? form : c));
    toast(adding ? 'Job opening added!' : 'Job opening updated!');
    cancel();
  };

  const remove = (id) => {
    if (window.confirm('Delete this job opening?')) { update('careers', data.careers.filter(c => c.id !== id)); toast('Job opening deleted', 'info'); }
  };

  const addListItem = (field) => {
    setForm(p => ({ ...p, [field]: [...(p[field] || []), ''] }));
  };

  const updateListItem = (field, idx, val) => {
    setForm(p => ({ ...p, [field]: p[field].map((item, i) => i === idx ? val : item) }));
  };

  const removeListItem = (field, idx) => {
    setForm(p => ({ ...p, [field]: p[field].filter((_, i) => i !== idx) }));
  };

  return (
    <div>
      <SectionHeader title="Job Openings" subtitle="Manage career opportunities"
        action={<Btn onClick={startAdd} variant="primary"><Plus size={14} /> Add Job Opening</Btn>} />

      {(editing !== null || adding) && (
        <Card className="mb-6 border-yellow-200 bg-yellow-50">
          <h3 className="font-bold text-slate-900 mb-4">{adding ? 'Add Job Opening' : 'Edit Job Opening'}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Job Title" value={form.title || ''} onChange={v => setForm(p => ({ ...p, title: v }))} required />
            <Input label="Department" value={form.dept || ''} onChange={v => setForm(p => ({ ...p, dept: v }))} placeholder="e.g. BIM & Technology" />
            <Input label="Location" value={form.location || ''} onChange={v => setForm(p => ({ ...p, location: v }))} placeholder="e.g. Pune, Maharashtra" />
            <Input label="Type" value={form.type || ''} onChange={v => setForm(p => ({ ...p, type: v }))} placeholder="Full-Time, Part-Time, etc." />
            <Input label="Experience" value={form.experience || ''} onChange={v => setForm(p => ({ ...p, experience: v }))} placeholder="e.g. 3-6 Years" />
          </div>
          <div className="mt-4">
            <Textarea label="Job Description" value={form.desc || ''} onChange={v => setForm(p => ({ ...p, desc: v }))} rows={2} />
          </div>

          <div className="mt-4">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">Responsibilities</label>
            {(form.responsibilities || []).map((r, i) => (
              <div key={i} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={r}
                  onChange={e => updateListItem('responsibilities', i, e.target.value)}
                  className="flex-1 px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm"
                  placeholder="Responsibility..."
                />
                <Btn onClick={() => removeListItem('responsibilities', i)} variant="danger" size="sm"><Trash2 size={12} /></Btn>
              </div>
            ))}
            <Btn onClick={() => addListItem('responsibilities')} variant="ghost" size="sm"><Plus size={12} /> Add Responsibility</Btn>
          </div>

          <div className="mt-4">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">Requirements</label>
            {(form.requirements || []).map((r, i) => (
              <div key={i} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={r}
                  onChange={e => updateListItem('requirements', i, e.target.value)}
                  className="flex-1 px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm"
                  placeholder="Requirement..."
                />
                <Btn onClick={() => removeListItem('requirements', i)} variant="danger" size="sm"><Trash2 size={12} /></Btn>
              </div>
            ))}
            <Btn onClick={() => addListItem('requirements')} variant="ghost" size="sm"><Plus size={12} /> Add Requirement</Btn>
          </div>

          <div className="flex gap-3 mt-4">
            <Btn onClick={save} variant="primary"><Save size={14} /> Save</Btn>
            <Btn onClick={cancel} variant="ghost"><X size={14} /> Cancel</Btn>
          </div>
        </Card>
      )}

      <div className="space-y-3">
        {data.careers.map((c) => (
          <Card key={c.id}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded-full">{c.dept}</span>
                  <span className="text-[10px] text-gray-400">{c.type} · {c.experience}</span>
                </div>
                <h4 className="font-semibold text-slate-900 text-sm mt-1.5">{c.title}</h4>
                <p className="text-gray-400 text-xs mt-0.5">{c.location}</p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <Btn onClick={() => startEdit(c)} variant="ghost" size="sm"><Edit3 size={12} /> Edit</Btn>
                <Btn onClick={() => remove(c.id)} variant="danger" size="sm"><Trash2 size={12} /></Btn>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

// ─── CONTACT INFO MANAGER ─────────────────────────────────────────────────────

const ContactManager = () => {
  const { data, update } = useAdmin();
  const [form, setForm] = useState({ ...data.contact });
  const dirty = JSON.stringify(form) !== JSON.stringify(data.contact);

  const save = () => { update('contact', form); toast('Contact information saved!'); };
  const discard = () => setForm({ ...data.contact });

  return (
    <div>
      <SectionHeader title="Contact Information" subtitle="Update company contact details" />
      <UnsavedBanner dirty={dirty} onSave={save} onDiscard={discard} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <h3 className="font-semibold text-slate-900 mb-4 text-sm">Office & Hours</h3>
          <div className="space-y-4">
            <Textarea label="Office Address" value={form.office || ''} onChange={v => setForm(p => ({ ...p, office: v }))} rows={2} />
            <Input label="Working Hours" value={form.hours || ''} onChange={v => setForm(p => ({ ...p, hours: v }))} placeholder="Mon – Sat: 9:00 AM – 7:00 PM" />
          </div>
        </Card>
        <Card>
          <h3 className="font-semibold text-slate-900 mb-4 text-sm">Phone & Email</h3>
          <div className="space-y-4">
            <Input label="Phone 1" value={form.phone1 || ''} onChange={v => setForm(p => ({ ...p, phone1: v }))} placeholder="+91 91122 34455" />
            <Input label="Phone 2" value={form.phone2 || ''} onChange={v => setForm(p => ({ ...p, phone2: v }))} placeholder="+91 91122 34488" />
            <Input label="Email 1" value={form.email1 || ''} onChange={v => setForm(p => ({ ...p, email1: v }))} placeholder="info@e-construct.org" />
            <Input label="Email 2" value={form.email2 || ''} onChange={v => setForm(p => ({ ...p, email2: v }))} placeholder="business@e-construct.org" />
          </div>
        </Card>
        <Card>
          <h3 className="font-semibold text-slate-900 mb-4 text-sm">Social Media Links</h3>
          <div className="space-y-4">
            <Input label="Facebook" value={form.facebook || ''} onChange={v => setForm(p => ({ ...p, facebook: v }))} placeholder="https://facebook.com/..." />
            <Input label="LinkedIn" value={form.linkedin || ''} onChange={v => setForm(p => ({ ...p, linkedin: v }))} placeholder="https://linkedin.com/..." />
            <Input label="Instagram" value={form.instagram || ''} onChange={v => setForm(p => ({ ...p, instagram: v }))} placeholder="https://instagram.com/..." />
            <Input label="YouTube" value={form.youtube || ''} onChange={v => setForm(p => ({ ...p, youtube: v }))} placeholder="https://youtube.com/..." />
          </div>
        </Card>
        <Card>
          <h3 className="font-semibold text-slate-900 mb-4 text-sm">Google Maps</h3>
          <Textarea label="Maps Embed URL" value={form.mapEmbed || ''} onChange={v => setForm(p => ({ ...p, mapEmbed: v }))} rows={4} placeholder="Paste the Google Maps embed src URL here..." />
          <p className="text-xs text-gray-400 mt-2">Go to Google Maps → Share → Embed a map → copy the src URL</p>
        </Card>
      </div>
      <div className="mt-4">
        <Btn onClick={save} variant="primary" disabled={!dirty}><Save size={14} /> Save Changes</Btn>
      </div>
    </div>
  );
};

// ─── COMPANY STATS MANAGER ────────────────────────────────────────────────────

const StatsManager = () => {
  const { data, update } = useAdmin();
  const [form, setForm] = useState({ ...data.companyStats });
  const dirty = JSON.stringify(form) !== JSON.stringify(data.companyStats);

  const save = () => { update('companyStats', form); toast('Company stats saved!'); };
  const discard = () => setForm({ ...data.companyStats });

  return (
    <div>
      <SectionHeader title="Company Statistics" subtitle="These numbers appear across the website — hero, about, careers pages" />
      <UnsavedBanner dirty={dirty} onSave={save} onDiscard={discard} />
      <Card>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Input label="Years of Experience" value={form.yearsOfExperience || ''} onChange={v => setForm(p => ({ ...p, yearsOfExperience: v }))} placeholder="25+" hint="e.g. 25+" />
          <Input label="Projects Delivered" value={form.projectsDelivered || ''} onChange={v => setForm(p => ({ ...p, projectsDelivered: v }))} placeholder="650+" hint="e.g. 650+" />
          <Input label="Happy Clients" value={form.happyClients || ''} onChange={v => setForm(p => ({ ...p, happyClients: v }))} placeholder="500+" hint="e.g. 500+" />
          <Input label="Open Positions" value={form.openPositions || ''} onChange={v => setForm(p => ({ ...p, openPositions: v }))} placeholder="6+" hint="e.g. 6+" />
          <Input label="Certification" value={form.certification || ''} onChange={v => setForm(p => ({ ...p, certification: v }))} placeholder="ISO 9001:2015" />
        </div>
        <div className="mt-4">
          <Btn onClick={save} variant="primary" disabled={!dirty}><Save size={14} /> Save Changes</Btn>
        </div>
      </Card>
    </div>
  );
};

// ─── CHATBOT KNOWLEDGE MANAGER ────────────────────────────────────────────────

const OPENAI_MODELS = [
  { value: 'gpt-4o-mini', label: 'GPT-4o Mini — Fast & cheap (recommended)' },
  { value: 'gpt-4o', label: 'GPT-4o — Most capable' },
  { value: 'gpt-4-turbo', label: 'GPT-4 Turbo' },
  { value: 'gpt-3.5-turbo', label: 'GPT-3.5 Turbo — Fastest & cheapest' },
];

const ChatbotManager = () => {
  const { data, update } = useAdmin();
  const [knowledge, setKnowledge] = useState(data.chatbotKnowledge);
  const [config, setConfig] = useState({ ...data.chatbotConfig });
  const [showKey, setShowKey] = useState(false);
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState(null);

  const knowledgeDirty = knowledge !== data.chatbotKnowledge;
  const configDirty = JSON.stringify(config) !== JSON.stringify(data.chatbotConfig);
  const dirty = knowledgeDirty || configDirty;

  const save = () => {
    update('chatbotKnowledge', knowledge);
    update('chatbotConfig', config);
    toast('Chatbot settings saved!');
  };
  const discard = () => { setKnowledge(data.chatbotKnowledge); setConfig({ ...data.chatbotConfig }); };

  const testConnection = async () => {
    if (!config.apiKey) { setTestResult({ ok: false, msg: 'No API key entered.' }); return; }
    setTesting(true);
    setTestResult(null);
    try {
      const res = await fetch('https://api.openai.com/v1/models', {
        headers: { Authorization: `Bearer ${config.apiKey}` },
      });
      if (res.ok) setTestResult({ ok: true, msg: 'API key is valid!' });
      else setTestResult({ ok: false, msg: `Invalid key (${res.status})` });
    } catch {
      setTestResult({ ok: false, msg: 'Could not reach OpenAI. Check your connection.' });
    } finally {
      setTesting(false);
    }
  };

  return (
    <div>
      <SectionHeader title="Chatbot Settings" subtitle="Configure the AI assistant (Isha) that appears on your website" />
      <UnsavedBanner dirty={dirty} onSave={save} onDiscard={discard} />

      {/* API Config */}
      <Card className="mb-4">
        <h3 className="font-semibold text-slate-900 mb-4 text-sm">OpenAI Configuration</h3>
        <div className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-600 block">API Key</label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type={showKey ? 'text' : 'password'}
                  value={config.apiKey || ''}
                  onChange={e => setConfig(p => ({ ...p, apiKey: e.target.value }))}
                  placeholder="sk-..."
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none text-sm font-mono"
                />
                <button type="button" onClick={() => setShowKey(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-slate-600 text-xs font-semibold">
                  {showKey ? 'Hide' : 'Show'}
                </button>
              </div>
              <Btn onClick={testConnection} variant="ghost" disabled={testing}>
                {testing ? <span className="w-3 h-3 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" /> : <CheckCircle size={13} />}
                Test
              </Btn>
            </div>
            {testResult && (
              <p className={`text-xs flex items-center gap-1.5 mt-1 ${testResult.ok ? 'text-green-600' : 'text-red-500'}`}>
                {testResult.ok ? <CheckCircle size={12} /> : <AlertCircle size={12} />}
                {testResult.msg}
              </p>
            )}
            <p className="text-xs text-gray-400">
              Get your key at <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">platform.openai.com/api-keys</a>. It's stored in your browser only.
            </p>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-600 block">Model</label>
            <select
              value={config.model || 'gpt-4o-mini'}
              onChange={e => setConfig(p => ({ ...p, model: e.target.value }))}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none text-sm"
            >
              {OPENAI_MODELS.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
            </select>
            <p className="text-xs text-gray-400">GPT-4o Mini is the best balance of speed and cost for a website chatbot.</p>
          </div>
        </div>
      </Card>

      {/* Knowledge base */}
      <Card>
        <h3 className="font-semibold text-slate-900 mb-1 text-sm">Knowledge Base</h3>
        <p className="text-xs text-gray-400 mb-4">This is the system prompt — it defines what Isha knows and how she responds.</p>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 mb-4 text-xs text-blue-700">
          <strong>Tip:</strong> Use <code className="bg-blue-100 px-1 rounded">--- SECTION NAME ---</code> headers to organise information. Keep it factual and concise.
        </div>
        <Textarea value={knowledge} onChange={setKnowledge} rows={18} />
        <div className="flex items-center justify-between mt-4">
          <p className="text-xs text-gray-400">{knowledge.length} characters</p>
          <Btn onClick={save} variant="primary" disabled={!dirty}><Save size={14} /> Save Changes</Btn>
        </div>
      </Card>
    </div>
  );
};

// ─── FAQS MANAGER ─────────────────────────────────────────────────────────────

const FAQsManager = () => {
  const { data, update } = useAdmin();
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({});
  const [adding, setAdding] = useState(false);

  const startEdit = (item) => { setEditing(item.id); setForm({ ...item }); setAdding(false); };
  const startAdd = () => { setAdding(true); setEditing(null); setForm({ id: Date.now(), q: '', a: '' }); };
  const cancel = () => { setEditing(null); setAdding(false); setForm({}); };

  const save = () => {
    if (!form.q || !form.a) return;
    if (adding) update('faqs', [...data.faqs, form]);
    else update('faqs', data.faqs.map(f => f.id === editing ? form : f));
    toast(adding ? 'FAQ added!' : 'FAQ updated!');
    cancel();
  };

  const remove = (id) => {
    if (window.confirm('Delete this FAQ?')) { update('faqs', data.faqs.filter(f => f.id !== id)); toast('FAQ deleted', 'info'); }
  };

  return (
    <div>
      <SectionHeader title="FAQs" subtitle="Manage frequently asked questions shown on the Contact page"
        action={<Btn onClick={startAdd} variant="primary"><Plus size={14} /> Add FAQ</Btn>} />

      {(editing !== null || adding) && (
        <Card className="mb-6 border-yellow-200 bg-yellow-50">
          <h3 className="font-bold text-slate-900 mb-4">{adding ? 'Add FAQ' : 'Edit FAQ'}</h3>
          <Input label="Question" value={form.q || ''} onChange={v => setForm(p => ({ ...p, q: v }))} required placeholder="e.g. How quickly can I expect a response?" />
          <div className="mt-4">
            <Textarea label="Answer" value={form.a || ''} onChange={v => setForm(p => ({ ...p, a: v }))} rows={3} placeholder="Write a clear, helpful answer..." />
          </div>
          <div className="flex gap-3 mt-4">
            <Btn onClick={save} variant="primary"><Save size={14} /> Save</Btn>
            <Btn onClick={cancel} variant="ghost"><X size={14} /> Cancel</Btn>
          </div>
        </Card>
      )}

      <div className="space-y-2">
        {data.faqs.map((f, i) => (
          <Card key={f.id} className="!py-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start gap-3">
                  <span className="text-xs font-bold text-gray-300 mt-0.5 flex-shrink-0">Q{i + 1}</span>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">{f.q}</h4>
                    <p className="text-gray-400 text-xs mt-1 line-clamp-2">{f.a}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <Btn onClick={() => startEdit(f)} variant="ghost" size="sm"><Edit3 size={12} /></Btn>
                <Btn onClick={() => remove(f.id)} variant="danger" size="sm"><Trash2 size={12} /></Btn>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

// ─── TESTIMONIALS MANAGER ─────────────────────────────────────────────────────

const TestimonialsManager = () => {
  const { data, update } = useAdmin();
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({});
  const [adding, setAdding] = useState(false);

  const startEdit = (item) => { setEditing(item.id); setForm({ ...item }); setAdding(false); };
  const startAdd = () => { setAdding(true); setEditing(null); setForm({ id: Date.now(), name: '', role: '', rating: 5, text: '' }); };
  const cancel = () => { setEditing(null); setAdding(false); setForm({}); };

  const save = () => {
    if (!form.name || !form.text) return;
    if (adding) update('testimonials', [...data.testimonials, form]);
    else update('testimonials', data.testimonials.map(t => t.id === editing ? form : t));
    toast(adding ? 'Testimonial added!' : 'Testimonial updated!');
    cancel();
  };

  const remove = (id) => {
    if (window.confirm('Delete this testimonial?')) { update('testimonials', data.testimonials.filter(t => t.id !== id)); toast('Testimonial deleted', 'info'); }
  };

  return (
    <div>
      <SectionHeader title="Testimonials" subtitle="Manage client reviews shown on the website"
        action={<Btn onClick={startAdd} variant="primary"><Plus size={14} /> Add Testimonial</Btn>} />

      {(editing !== null || adding) && (
        <Card className="mb-6 border-yellow-200 bg-yellow-50">
          <h3 className="font-bold text-slate-900 mb-4">{adding ? 'Add Testimonial' : 'Edit Testimonial'}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Client Name" value={form.name || ''} onChange={v => setForm(p => ({ ...p, name: v }))} required placeholder="e.g. Rajesh Kumar" />
            <Input label="Role / Company" value={form.role || ''} onChange={v => setForm(p => ({ ...p, role: v }))} placeholder="e.g. Real Estate Developer" />
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-600 block">Star Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(r => (
                  <button key={r} type="button" onClick={() => setForm(p => ({ ...p, rating: r }))}
                    className={`w-9 h-9 rounded-xl text-sm font-bold transition-all ${form.rating >= r ? 'bg-yellow-400 text-black' : 'bg-gray-100 text-gray-400'}`}>
                    {r}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Textarea label="Review Text" value={form.text || ''} onChange={v => setForm(p => ({ ...p, text: v }))} rows={3} placeholder="What did the client say?" />
          </div>
          <div className="flex gap-3 mt-4">
            <Btn onClick={save} variant="primary"><Save size={14} /> Save</Btn>
            <Btn onClick={cancel} variant="ghost"><X size={14} /> Cancel</Btn>
          </div>
        </Card>
      )}

      <div className="space-y-2">
        {data.testimonials.map((t) => (
          <Card key={t.id} className="!py-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-slate-900 text-sm">{t.name}</h4>
                  <span className="text-xs text-gray-400">· {t.role}</span>
                  <div className="flex gap-0.5 ml-auto">
                    {Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={11} className="fill-yellow-400 text-yellow-400" />)}
                  </div>
                </div>
                <p className="text-gray-400 text-xs line-clamp-2">{t.text}</p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <Btn onClick={() => startEdit(t)} variant="ghost" size="sm"><Edit3 size={12} /></Btn>
                <Btn onClick={() => remove(t.id)} variant="danger" size="sm"><Trash2 size={12} /></Btn>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

// ─── BOOKINGS MANAGER (WORKSHOP) ─────────────────────────────────────────────
const BookingsManager = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try {
      const res = await apiFetch('/api/bookings');
      if (res.ok) setBookings(await res.json());
    } catch {} finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  return (
    <div>
      <SectionHeader title="Workshop Bookings" subtitle="Manage ETABS Workshop Registrations" />
      {loading ? (
        <div className="flex justify-center py-10"><div className="w-5 h-5 border-2 border-t-yellow-500 rounded-full animate-spin" /></div>
      ) : bookings.length === 0 ? (
        <Card className="text-center py-10 text-gray-500">No bookings found.</Card>
      ) : (
        <div className="space-y-4">
          {bookings.map(b => (
            <Card key={b.id}>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">{b.collegeName}</h4>
                  <p className="text-sm text-gray-500">{b.contactPerson} ({b.designation}) • {b.email} • {b.mobile}</p>
                  <p className="text-sm text-gray-500 mt-2"><strong>Date:</strong> {b.preferredDate} | <strong>Students:</strong> {b.studentCount}</p>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 text-xs font-bold rounded uppercase ${b.status === 'CONFIRMED' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {b.status}
                  </span>
                  <p className="text-xs text-gray-400 mt-2">Placed: {new Date(b.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

// ─── CALENDAR MANAGER ────────────────────────────────────────────────────────
const CalendarManager = () => {
  const [blocks, setBlocks] = useState([]);
  const [date, setDate] = useState('');
  const [reason, setReason] = useState('');
  
  const load = async () => {
    try {
      const res = await apiFetch('/api/calendar');
      if (res.ok) setBlocks(await res.json());
    } catch {}
  };

  useEffect(() => { load(); }, []);

  const addBlock = async () => {
    if (!date) return;
    await apiFetch('/api/calendar/block', { method: 'POST', body: JSON.stringify({ date, reason }) });
    setDate(''); setReason('');
    toast('Date blocked successfully');
    load();
  };

  const removeBlock = async (id) => {
    await apiFetch(`/api/calendar/block/${id}`, { method: 'DELETE' });
    toast('Block removed');
    load();
  };

  return (
    <div>
      <SectionHeader title="Calendar Manager" subtitle="Block specific dates for the ETABS Workshop" />
      <Card className="mb-6">
        <div className="grid sm:grid-cols-3 gap-4 items-end">
          <Input label="Date" type="date" value={date} onChange={setDate} />
          <Input label="Reason (Optional)" value={reason} onChange={setReason} placeholder="e.g. Staff unavailable" />
          <Btn onClick={addBlock} variant="primary"><Plus size={14}/> Block Date</Btn>
        </div>
      </Card>
      
      <div className="space-y-2">
        {blocks.filter(b => b.type === 'admin_block').map(b => (
          <Card key={b.id} className="flex justify-between items-center">
            <div><span className="font-bold text-slate-800">{b.date}</span> <span className="text-sm text-gray-500">- {b.reason || 'No reason'}</span></div>
            <Btn onClick={() => removeBlock(b.id)} variant="danger" size="sm"><Trash2 size={12}/></Btn>
          </Card>
        ))}
      </div>
    </div>
  );
};

// ─── INBOX MANAGER ────────────────────────────────────────────────────────────

const InboxManager = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all'); // all | unread | read

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await apiFetch('/api/contact');
      if (res.status === 401) {
        // Token is invalid/expired — clear it so user gets re-login prompt
        clearToken();
        window.location.reload();
        return;
      }
      if (res.ok) setSubmissions(await res.json());
    } catch { }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { load(); }, [load]);

  const markRead = async (id) => {
    await apiFetch(`/api/contact/${id}/read`, { method: 'PATCH' });
    setSubmissions(p => p.map(s => s.id === id ? { ...s, read: true } : s));
    if (selected?.id === id) setSelected(s => ({ ...s, read: true }));
  };

  const remove = async (id) => {
    if (!window.confirm('Delete this submission?')) return;
    await apiFetch(`/api/contact/${id}`, { method: 'DELETE' });
    setSubmissions(p => p.filter(s => s.id !== id));
    if (selected?.id === id) setSelected(null);
    toast('Submission deleted', 'info');
  };

  const open = (sub) => {
    setSelected(sub);
    if (!sub.read) markRead(sub.id);
  };

  const fmt = (iso) => new Date(iso).toLocaleString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });

  const filtered = submissions.filter(s => {
    if (filter === 'unread' && s.read) return false;
    if (filter === 'read' && !s.read) return false;
    const q = search.toLowerCase();
    return !q || s.name.toLowerCase().includes(q) || s.email.toLowerCase().includes(q) || s.message.toLowerCase().includes(q);
  });

  const unread = submissions.filter(s => !s.read).length;

  return (
    <div>
      <SectionHeader title="Form Submissions" subtitle={`Contact form messages from your website${unread > 0 ? ` · ${unread} unread` : ''}`} />

      <div className="flex gap-3 mb-4 flex-wrap">
        <div className="flex-1 min-w-48"><SearchBar value={search} onChange={setSearch} placeholder="Search by name, email, message..." /></div>
        <div className="flex gap-1 bg-gray-100 p-1 rounded-xl">
          {[['all', 'All'], ['unread', 'Unread'], ['read', 'Read']].map(([v, l]) => (
            <button key={v} onClick={() => setFilter(v)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${filter === v ? 'bg-white shadow-sm text-slate-900' : 'text-gray-500 hover:text-slate-700'}`}>
              {l}{v === 'unread' && unread > 0 ? ` (${unread})` : ''}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-16 text-gray-400 gap-2">
          <div className="w-5 h-5 border-2 border-gray-300 border-t-yellow-500 rounded-full animate-spin" />Loading…
        </div>
      ) : filtered.length === 0 ? (
        <Card className="text-center py-16">
          <Inbox size={32} className="text-gray-200 mx-auto mb-3" />
          <p className="text-gray-400 text-sm">{submissions.length === 0 ? 'No submissions yet.' : 'No submissions match your filter.'}</p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* List */}
          <div className="space-y-2">
            {filtered.map(s => (
              <button key={s.id} onClick={() => open(s)}
                className={`w-full text-left p-4 rounded-2xl border transition-all ${selected?.id === s.id ? 'border-yellow-400 bg-yellow-50' :
                    !s.read ? 'border-blue-100 bg-blue-50/50 hover:border-blue-200' :
                      'border-gray-100 bg-white hover:border-gray-200'
                  }`}>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    {!s.read && <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0 mt-1" />}
                    <div className="min-w-0">
                      <p className={`text-sm truncate ${!s.read ? 'font-bold text-slate-900' : 'font-medium text-slate-700'}`}>{s.name}</p>
                      <p className="text-xs text-gray-400 truncate">{s.email}</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-gray-400 flex-shrink-0">{fmt(s.createdAt)}</span>
                </div>
                <p className="text-xs text-gray-500 mt-2 line-clamp-2 pl-4">{s.message}</p>
              </button>
            ))}
          </div>

          {/* Detail */}
          {selected ? (
            <Card className="h-fit sticky top-4">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-slate-900">{selected.name}</h3>
                  <a href={`mailto:${selected.email}`} className="text-sm text-yellow-600 hover:underline">{selected.email}</a>
                  {selected.phone && <p className="text-xs text-gray-400 mt-0.5">{selected.phone}</p>}
                </div>
                <Btn onClick={() => remove(selected.id)} variant="danger" size="sm"><Trash2 size={12} /></Btn>
              </div>
              {selected.service && (
                <div className="mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded-full">{selected.service}</span>
                </div>
              )}
              <div className="bg-gray-50 rounded-xl p-4 text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">{selected.message}</div>
              <p className="text-xs text-gray-400 mt-3">{fmt(selected.createdAt)}</p>
              <div className="mt-4 flex gap-2">
                <a href={`mailto:${selected.email}?subject=Re: Your enquiry`}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-yellow-500 hover:bg-slate-900 hover:text-white text-black font-bold rounded-xl text-xs transition-all">
                  <Mail size={13} /> Reply via Email
                </a>
              </div>
            </Card>
          ) : (
            <div className="hidden lg:flex items-center justify-center text-gray-300 text-sm">
              <div className="text-center"><Inbox size={40} className="mx-auto mb-2 opacity-30" /><p>Select a message to read</p></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ─── BACKUP & RESTORE MANAGER ─────────────────────────────────────────────────

const BackupManager = () => {
  const { data, update } = useAdmin();
  const [backups, setBackups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const importRef = useRef(null);

  const loadBackups = useCallback(async () => {
    setLoading(true);
    try {
      const res = await apiFetch('/api/backups');
      if (res.ok) setBackups(await res.json());
    } catch { }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { loadBackups(); }, [loadBackups]);

  const createBackup = async () => {
    setSaving(true);
    try {
      const res = await apiFetch('/api/backup', {
        method: 'POST',
        body: JSON.stringify({ content: data }),
      });
      if (!res.ok) throw new Error('Backup failed');
      toast('Backup created!');
      loadBackups();
    } catch (e) { toast(e.message, 'error'); }
    finally { setSaving(false); }
  };

  const downloadBackup = (filename) => {
    const a = document.createElement('a');
    a.href = `/api/backups/${filename}`;
    a.download = filename;
    a.click();
  };

  const deleteBackup = async (filename) => {
    if (!window.confirm('Delete this backup?')) return;
    await apiFetch(`/api/backups/${filename}`, { method: 'DELETE' });
    toast('Backup deleted', 'info');
    loadBackups();
  };

  const restoreBackup = async (filename) => {
    if (!window.confirm('Restore this backup? This will overwrite all current content.')) return;
    try {
      const res = await apiFetch(`/api/backups/${filename}`);
      const json = await res.json();
      if (json.content) {
        Object.entries(json.content).forEach(([k, v]) => update(k, v));
        toast('Backup restored!');
      }
    } catch { toast('Restore failed', 'error'); }
  };

  // Export to local JSON file
  const exportLocal = () => {
    const blob = new Blob([JSON.stringify({ content: data, savedAt: new Date().toISOString() }, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `econstruct_backup_${Date.now()}.json`;
    a.click();
    toast('Exported to file!');
  };

  // Import from local JSON file
  const importLocal = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const json = JSON.parse(ev.target.result);
        const content = json.content || json;
        if (!window.confirm('Import this file? This will overwrite all current content.')) return;
        Object.entries(content).forEach(([k, v]) => update(k, v));
        toast('Content imported!');
      } catch { toast('Invalid backup file', 'error'); }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const fmt = (iso) => new Date(iso).toLocaleString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  const fmtSize = (b) => b < 1024 ? `${b} B` : b < 1024 * 1024 ? `${(b / 1024).toFixed(1)} KB` : `${(b / 1024 / 1024).toFixed(2)} MB`;

  return (
    <div>
      <SectionHeader title="Backup & Restore" subtitle="Save and restore all website content" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <Card className="flex flex-col gap-3">
          <h3 className="font-semibold text-slate-900 text-sm">Server Backup</h3>
          <p className="text-xs text-gray-400">Save a snapshot to the server. Accessible from any device.</p>
          <Btn onClick={createBackup} variant="primary" disabled={saving}>
            {saving ? <><span className="w-3 h-3 border-2 border-black/30 border-t-black rounded-full animate-spin" />Saving…</> : <><Save size={13} />Create Backup</>}
          </Btn>
        </Card>
        <Card className="flex flex-col gap-3">
          <h3 className="font-semibold text-slate-900 text-sm">Local Export / Import</h3>
          <p className="text-xs text-gray-400">Download a JSON file to your computer, or import one.</p>
          <div className="flex gap-2">
            <Btn onClick={exportLocal} variant="ghost"><Download size={13} />Export</Btn>
            <Btn onClick={() => importRef.current?.click()} variant="ghost"><Upload size={13} />Import</Btn>
            <input ref={importRef} type="file" accept=".json" className="hidden" onChange={importLocal} />
          </div>
        </Card>
      </div>

      <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Server Backups</h3>
      {loading ? (
        <div className="flex items-center justify-center py-8 text-gray-400 gap-2 text-sm">
          <div className="w-4 h-4 border-2 border-gray-300 border-t-yellow-500 rounded-full animate-spin" />Loading…
        </div>
      ) : backups.length === 0 ? (
        <Card className="text-center py-8 text-gray-400 text-sm">No server backups yet.</Card>
      ) : (
        <div className="space-y-2">
          {backups.map(b => (
            <Card key={b.filename} className="flex items-center gap-4 !py-3">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900 truncate">{fmt(b.savedAt)}</p>
                <p className="text-xs text-gray-400">{fmtSize(b.size)}</p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <Btn onClick={() => restoreBackup(b.filename)} variant="ghost" size="sm"><RefreshCw size={12} />Restore</Btn>
                <Btn onClick={() => downloadBackup(b.filename)} variant="ghost" size="sm"><Download size={12} /></Btn>
                <Btn onClick={() => deleteBackup(b.filename)} variant="danger" size="sm"><Trash2 size={12} /></Btn>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

// ─── ACTIVITY LOG ─────────────────────────────────────────────────────────────

const ActivityLog = () => {
  const [log, setLog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFetch('/api/activity').then(r => r.json()).then(setLog).catch(() => setLog([])).finally(() => setLoading(false));
  }, []);

  const fmt = (iso) => new Date(iso).toLocaleString('en-IN', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });

  const iconFor = (action) => {
    if (action.includes('Image')) return <Image size={14} className="text-blue-500" />;
    if (action.includes('Backup')) return <Download size={14} className="text-green-500" />;
    if (action.includes('deleted')) return <Trash2 size={14} className="text-red-500" />;
    return <Activity size={14} className="text-gray-400" />;
  };

  return (
    <div>
      <SectionHeader title="Activity Log" subtitle="Recent actions performed in the admin panel" />
      {loading ? (
        <div className="flex items-center justify-center py-8 text-gray-400 gap-2 text-sm">
          <div className="w-4 h-4 border-2 border-gray-300 border-t-yellow-500 rounded-full animate-spin" />Loading…
        </div>
      ) : log.length === 0 ? (
        <Card className="text-center py-8 text-gray-400 text-sm">No activity recorded yet.</Card>
      ) : (
        <div className="space-y-1">
          {log.map(entry => (
            <div key={entry.id} className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-100 rounded-xl">
              <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0">
                {iconFor(entry.action)}
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-sm font-medium text-slate-900">{entry.action}</span>
                {entry.detail && <span className="text-xs text-gray-400 ml-2 truncate">{entry.detail}</span>}
              </div>
              <span className="text-xs text-gray-400 flex-shrink-0 flex items-center gap-1">
                <Clock size={11} />{fmt(entry.at)}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ─── CHANGE PASSWORD ──────────────────────────────────────────────────────────

const ChangePasswordManager = () => {
  const [form, setForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  const save = async () => {
    setErr('');
    if (form.newPassword !== form.confirmPassword) { setErr('New passwords do not match.'); return; }
    if (form.newPassword.length < 8) { setErr('New password must be at least 8 characters.'); return; }
    setLoading(true);
    try {
      const res = await apiFetch('/api/auth/change-password', {
        method: 'POST',
        body: JSON.stringify({ currentPassword: form.currentPassword, newPassword: form.newPassword }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      toast('Password changed successfully!');
      setForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (e) { setErr(e.message); }
    finally { setLoading(false); }
  };

  return (
    <div>
      <SectionHeader title="Change Password" subtitle="Update your admin panel password" />
      <Card className="max-w-md">
        <div className="space-y-4">
          <Input label="Current Password" type="password" value={form.currentPassword}
            onChange={v => setForm(p => ({ ...p, currentPassword: v }))} placeholder="Enter current password" />
          <Input label="New Password" type="password" value={form.newPassword}
            onChange={v => setForm(p => ({ ...p, newPassword: v }))} placeholder="At least 8 characters" hint="min 8 chars" />
          <Input label="Confirm New Password" type="password" value={form.confirmPassword}
            onChange={v => setForm(p => ({ ...p, confirmPassword: v }))} placeholder="Repeat new password" />
          {err && <p className="text-red-500 text-xs flex items-center gap-1.5"><AlertCircle size={12} />{err}</p>}
          <Btn onClick={save} variant="primary" disabled={loading || !form.currentPassword || !form.newPassword}>
            {loading ? <><span className="w-3 h-3 border-2 border-black/30 border-t-black rounded-full animate-spin" />Saving…</> : <><Lock size={13} />Change Password</>}
          </Btn>
        </div>
      </Card>
    </div>
  );
};

// ─── SETTINGS ─────────────────────────────────────────────────────────────────

const SettingsPanel = () => {
  const { resetToDefaults } = useAdmin();

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset ALL data to defaults? This cannot be undone!')) {
      resetToDefaults();
      toast('All data has been reset to defaults.');
      window.location.reload();
    }
  };

  return (
    <div>
      <SectionHeader title="Settings" subtitle="Admin panel configuration" />
      <Card>
        <h3 className="font-bold text-slate-900 mb-2">Danger Zone</h3>
        <p className="text-gray-500 text-sm mb-4">Reset all website content to default values. This action cannot be undone.</p>
        <Btn onClick={handleReset} variant="danger"><RefreshCw size={14} /> Reset to Defaults</Btn>
      </Card>
    </div>
  );
};

// ─── MAIN ADMIN PANEL ─────────────────────────────────────────────────────────

const AdminPanel = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [authChecking, setAuthChecking] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedGroups, setExpandedGroups] = useState({ content: true, pages: false, settings: false });

  // On mount: verify existing token with server
  useEffect(() => {
    const verify = async () => {
      const token = getToken();
      if (!token) { setAuthChecking(false); return; }
      // Local dev fallback token — trust it without hitting the server
      if (token === 'local-dev-token') { setAuthenticated(true); setAuthChecking(false); return; }
      try {
        const res = await apiFetch('/api/auth/verify');
        if (res.ok) setAuthenticated(true);
        else clearToken();
      } catch {
        // Server unreachable — keep the session alive rather than logging out
        setAuthenticated(true);
      } finally {
        setAuthChecking(false);
      }
    };
    verify();
  }, []);

  const handleLogin = () => setAuthenticated(true);

  const handleLogout = () => {
    clearToken();
    setAuthenticated(false);
  };

  if (authChecking) return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (!authenticated) return <LoginScreen onLogin={handleLogin} />;

  const toggleGroup = (group) => setExpandedGroups(p => ({ ...p, [group]: !p[group] }));

  const tabGroups = [
    {
      id: 'main',
      label: null,
      tabs: [{ id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard }],
    },
    {
      id: 'content',
      label: 'Website Content',
      icon: FileText,
      tabs: [
        { id: 'hero', label: 'Hero Section', icon: Home },
        { id: 'cta', label: 'CTA Section', icon: Zap },
        { id: 'about', label: 'About Content', icon: BookOpen },
        { id: 'aboutimages', label: 'About Images', icon: Image },
        { id: 'flipbooks', label: 'PDF Flipbooks', icon: FileText },
        { id: 'services', label: 'Services', icon: Briefcase },
        { id: 'projects', label: 'Projects', icon: FolderOpen },
        { id: 'blogs', label: 'Blogs', icon: BookOpen },
        { id: 'team', label: 'Team', icon: Users },
        { id: 'partners', label: 'Partners', icon: Star },
        { id: 'careers', label: 'Careers', icon: UserCheck },
        { id: 'testimonials', label: 'Testimonials', icon: Star },
        { id: 'faqs', label: 'FAQs', icon: HelpCircle },
      ],
    },
    {
      id: 'pages',
      label: 'Page-Specific',
      icon: Layers,
      tabs: [
        { id: 'structural', label: 'Structural Page', icon: Briefcase },
        { id: 'bim', label: 'BIM Page', icon: Layers },
        { id: 'construction', label: 'Construction Page', icon: Briefcase },
      ],
    },
    {
      id: 'workshop',
      label: 'Workshop Booking',
      icon: CalendarIcon,
      tabs: [
        { id: 'bookings', label: 'All Bookings', icon: FolderOpen },
        { id: 'calendar', label: 'Calendar Manager', icon: CalendarIcon },
      ],
    },
    {
      id: 'settings',
      label: 'Configuration',
      icon: Settings,
      tabs: [
        { id: 'contact', label: 'Contact Info', icon: Phone },
        { id: 'footer', label: 'Footer', icon: Globe },
        { id: 'stats', label: 'Company Stats', icon: BarChart3 },
        { id: 'chatbot', label: 'Chatbot', icon: MessageSquare },
        { id: 'inbox', label: 'Form Submissions', icon: Inbox },
        { id: 'backup', label: 'Backup & Restore', icon: Download },
        { id: 'activity', label: 'Activity Log', icon: Activity },
        { id: 'password', label: 'Change Password', icon: Lock },
        { id: 'settings', label: 'Settings', icon: Settings },
      ],
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard onNavigate={setActiveTab} />;
      case 'hero': return <HeroContentManager />;
      case 'cta': return <CTASectionManager />;
      case 'about': return <AboutContentManager />;
      case 'aboutimages': return <AboutImagesManager />;
      case 'flipbooks': return <FlipbooksManager />;
      case 'services': return <ServicesManager />;
      case 'projects': return <ProjectsManager />;
      case 'blogs': return <BlogsManager />;
      case 'team': return <TeamManager />;
      case 'partners': return <PartnersManager />;
      case 'careers': return <CareersManager />;
      case 'contact': return <ContactManager />;
      case 'footer': return <FooterContentManager />;
      case 'stats': return <StatsManager />;
      case 'chatbot': return <ChatbotManager />;
      case 'faqs': return <FAQsManager />;
      case 'testimonials': return <TestimonialsManager />;
      case 'structural': return <StructuralPageManager />;
      case 'bim': return <BimPageManager />;
      case 'construction': return <ConstructionPageManager />;
      case 'bookings': return <BookingsManager />;
      case 'calendar': return <CalendarManager />;
      case 'inbox': return <InboxManager />;
      case 'backup': return <BackupManager />;
      case 'activity': return <ActivityLog />;
      case 'password': return <ChangePasswordManager />;
      case 'settings': return <SettingsPanel />;
      default: return <Dashboard onNavigate={setActiveTab} />;
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen bg-gray-50 flex">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-slate-900 text-white transition-all duration-300 flex flex-col fixed h-screen z-50 overflow-hidden`}>
          <div className="p-6 border-b border-slate-700 flex items-center justify-between">
            {sidebarOpen && <h1 className="text-lg font-black">Admin Panel</h1>}
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-slate-700 rounded-lg">
              <Menu size={18} />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto py-4">
            {tabGroups.map((group) => (
              <div key={group.id}>
                {group.label && sidebarOpen && (
                  <button
                    onClick={() => toggleGroup(group.id)}
                    className="w-full flex items-center justify-between px-6 py-2 text-xs font-bold text-white/40 uppercase tracking-wider hover:text-white/60 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      {group.icon && <group.icon size={12} />}
                      {group.label}
                    </div>
                    <ChevronDown size={12} className={`transition-transform ${expandedGroups[group.id] ? 'rotate-180' : ''}`} />
                  </button>
                )}
                {(!group.label || expandedGroups[group.id]) && group.tabs.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`w-full flex items-center gap-3 px-6 py-2.5 text-sm font-semibold transition-colors ${activeTab === id ? 'bg-yellow-500 text-black' : 'text-white/70 hover:bg-slate-800 hover:text-white'
                      }`}
                  >
                    <Icon size={16} />
                    {sidebarOpen && <span>{label}</span>}
                  </button>
                ))}
              </div>
            ))}
          </nav>
          <div className="p-4 border-t border-slate-700">
            <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-white/70 hover:bg-slate-800 hover:text-white rounded-lg transition-colors">
              <Eye size={18} />
              {sidebarOpen && <span>View Website</span>}
            </a>
            <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold text-white/70 hover:bg-slate-800 hover:text-white rounded-lg transition-colors mt-2">
              <LogOut size={18} />
              {sidebarOpen && <span>Logout</span>}
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300 p-8`}>
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </>
  );
};

// ─── HERO CONTENT MANAGER ─────────────────────────────────────────────────────

const HeroContentManager = () => {
  const { data, update } = useAdmin();
  const [form, setForm] = useState({ ...data.heroContent });
  const dirty = JSON.stringify(form) !== JSON.stringify(data.heroContent);
  const save = () => { update('heroContent', form); toast('Hero section saved!'); };
  const discard = () => setForm({ ...data.heroContent });
  return (
    <div>
      <SectionHeader title="Hero Section" subtitle="The main banner visitors see first when they land on the homepage" />
      <UnsavedBanner dirty={dirty} onSave={save} onDiscard={discard} />
      <Card>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="Tagline" value={form.tagline || ''} onChange={v => setForm(p => ({ ...p, tagline: v }))} hint="Small text above headline" />
          <Input label="Headline" value={form.headline || ''} onChange={v => setForm(p => ({ ...p, headline: v }))} hint="Main big heading" />
          <Input label="Primary Button Text" value={form.primaryBtnText || ''} onChange={v => setForm(p => ({ ...p, primaryBtnText: v }))} placeholder="e.g. Get Free Inquiry" />
          <Input label="Secondary Button Text" value={form.secondaryBtnText || ''} onChange={v => setForm(p => ({ ...p, secondaryBtnText: v }))} placeholder="e.g. Explore Projects" />
        </div>
        <div className="mt-4">
          <Textarea label="Description" value={form.description || ''} onChange={v => setForm(p => ({ ...p, description: v }))} rows={2} hint="Shown below the headline" />
        </div>
        <div className="mt-4"><Btn onClick={save} variant="primary" disabled={!dirty}><Save size={14} /> Save Changes</Btn></div>
      </Card>
    </div>
  );
};

// ─── CTA SECTION MANAGER ──────────────────────────────────────────────────────

const CTASectionManager = () => {
  const { data, update } = useAdmin();
  const [form, setForm] = useState({ ...data.ctaSection });
  const dirty = JSON.stringify(form) !== JSON.stringify(data.ctaSection);
  const save = () => { update('ctaSection', form); toast('CTA section saved!'); };
  const discard = () => setForm({ ...data.ctaSection });
  return (
    <div>
      <SectionHeader title="CTA Section" subtitle="The call-to-action banner that appears throughout the site" />
      <UnsavedBanner dirty={dirty} onSave={save} onDiscard={discard} />
      <Card>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="Headline" value={form.headline || ''} onChange={v => setForm(p => ({ ...p, headline: v }))} placeholder="e.g. Got A Project?" />
          <Input label="Subheadline" value={form.subheadline || ''} onChange={v => setForm(p => ({ ...p, subheadline: v }))} placeholder="e.g. Small Or Big, We Design For All!" />
          <Input label="Button Text" value={form.btnText || ''} onChange={v => setForm(p => ({ ...p, btnText: v }))} placeholder="e.g. Get In Touch" />
        </div>
        <div className="mt-4">
          <Textarea label="Description" value={form.description || ''} onChange={v => setForm(p => ({ ...p, description: v }))} rows={2} />
        </div>
        <div className="mt-4"><Btn onClick={save} variant="primary" disabled={!dirty}><Save size={14} /> Save Changes</Btn></div>
      </Card>
    </div>
  );
};

// ─── ABOUT CONTENT MANAGER ────────────────────────────────────────────────────

const AboutContentManager = () => {
  const { data, update } = useAdmin();
  const [form, setForm] = useState({ ...data.aboutContent });
  const save = () => { update('aboutContent', form); toast('About content updated!'); };

  const addItem = (field) => setForm(p => ({ ...p, [field]: [...(p[field] || []), { title: '', desc: '' }] }));
  const updateItem = (field, idx, key, val) => setForm(p => ({ ...p, [field]: p[field].map((x, i) => i === idx ? { ...x, [key]: val } : x) }));
  const removeItem = (field, idx) => setForm(p => ({ ...p, [field]: p[field].filter((_, i) => i !== idx) }));

  return (
    <div>
      <SectionHeader title="About Section" subtitle="Update the About section on the homepage" />
      <Card className="mb-4">
        <h3 className="font-bold text-slate-900 mb-4">Text Content</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Tagline" value={form.tagline || ''} onChange={v => setForm(p => ({ ...p, tagline: v }))} />
            <Input label="Headline" value={form.headline || ''} onChange={v => setForm(p => ({ ...p, headline: v }))} />
            <Input label="Years Label" value={form.yearsLabel || ''} onChange={v => setForm(p => ({ ...p, yearsLabel: v }))} placeholder="25+" />
            <Input label="Years Sub-Label" value={form.yearsSubLabel || ''} onChange={v => setForm(p => ({ ...p, yearsSubLabel: v }))} />
          </div>
          <Textarea label="Paragraph 1" value={form.paragraph1 || ''} onChange={v => setForm(p => ({ ...p, paragraph1: v }))} rows={3} />
          <Textarea label="Paragraph 2" value={form.paragraph2 || ''} onChange={v => setForm(p => ({ ...p, paragraph2: v }))} rows={3} />
        </div>
      </Card>
      <Card className="mb-4">
        <h3 className="font-bold text-slate-900 mb-4">Features List</h3>
        {(form.featuresList || []).map((item, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <input type="text" value={item} onChange={e => setForm(p => ({ ...p, featuresList: p.featuresList.map((x, j) => j === i ? e.target.value : x) }))}
              className="flex-1 px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm" placeholder="Feature..." />
            <Btn onClick={() => setForm(p => ({ ...p, featuresList: p.featuresList.filter((_, j) => j !== i) }))} variant="danger" size="sm"><Trash2 size={12} /></Btn>
          </div>
        ))}
        <Btn onClick={() => setForm(p => ({ ...p, featuresList: [...(p.featuresList || []), ''] }))} variant="ghost" size="sm"><Plus size={12} /> Add Feature</Btn>
      </Card>
      <Card className="mb-4">
        <h3 className="font-bold text-slate-900 mb-4">Why Us Items</h3>
        {(form.whyUsItems || []).map((item, i) => (
          <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3 p-3 bg-gray-50 rounded-xl">
            <input type="text" value={item.title} onChange={e => updateItem('whyUsItems', i, 'title', e.target.value)}
              className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm" placeholder="Title..." />
            <div className="flex gap-2">
              <input type="text" value={item.desc} onChange={e => updateItem('whyUsItems', i, 'desc', e.target.value)}
                className="flex-1 px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm" placeholder="Description..." />
              <Btn onClick={() => removeItem('whyUsItems', i)} variant="danger" size="sm"><Trash2 size={12} /></Btn>
            </div>
          </div>
        ))}
        <Btn onClick={() => addItem('whyUsItems')} variant="ghost" size="sm"><Plus size={12} /> Add Item</Btn>
      </Card>
      <Btn onClick={save} variant="primary"><Save size={14} /> Save All Changes</Btn>
    </div>
  );
};

// ─── FOOTER CONTENT MANAGER ───────────────────────────────────────────────────

const FooterContentManager = () => {
  const { data, update } = useAdmin();
  const [form, setForm] = useState({ ...data.footerContent });
  const save = () => { update('footerContent', form); toast('Footer updated!'); };

  return (
    <div>
      <SectionHeader title="Footer Content" subtitle="Update footer text, links and newsletter" />
      <Card className="mb-4">
        <h3 className="font-bold text-slate-900 mb-4">General</h3>
        <div className="space-y-4">
          <ImageInput label="Company Logo" value={form.logoUrl || ''} onChange={v => setForm(p => ({ ...p, logoUrl: v }))} />
          <Textarea label="Company Description" value={form.companyDesc || ''} onChange={v => setForm(p => ({ ...p, companyDesc: v }))} rows={3} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Newsletter Title" value={form.newsletterTitle || ''} onChange={v => setForm(p => ({ ...p, newsletterTitle: v }))} />
            <Input label="Newsletter Subtitle" value={form.newsletterSubtitle || ''} onChange={v => setForm(p => ({ ...p, newsletterSubtitle: v }))} />
            <Input label="Copyright Name" value={form.copyrightName || ''} onChange={v => setForm(p => ({ ...p, copyrightName: v }))} />
            <Input label="Designed By" value={form.designedBy || ''} onChange={v => setForm(p => ({ ...p, designedBy: v }))} />
          </div>
        </div>
      </Card>
      <Card className="mb-4">
        <h3 className="font-bold text-slate-900 mb-1">Service Links</h3>
        <p className="text-xs text-gray-400 mb-4">Each service link shows in the footer with an optional URL. Leave the path blank to show it as plain text.</p>
        {(form.serviceLinks || []).map((link, i) => {
          const name = typeof link === 'string' ? link : link.name;
          const path = typeof link === 'string' ? '' : (link.path || '');
          return (
            <div key={i} className="flex gap-2 mb-2 items-center">
              <input
                type="text"
                value={name}
                onChange={e => setForm(p => ({ ...p, serviceLinks: p.serviceLinks.map((x, j) => j === i ? { name: e.target.value, path: typeof x === 'string' ? '' : (x.path || '') } : x) }))}
                className="flex-1 px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm"
                placeholder="Service name..."
              />
              <input
                type="text"
                value={path}
                onChange={e => setForm(p => ({ ...p, serviceLinks: p.serviceLinks.map((x, j) => j === i ? { name: typeof x === 'string' ? x : x.name, path: e.target.value } : x) }))}
                className="w-44 px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm"
                placeholder="/path (optional)"
              />
              <Btn onClick={() => setForm(p => ({ ...p, serviceLinks: p.serviceLinks.filter((_, j) => j !== i) }))} variant="danger" size="sm"><Trash2 size={12} /></Btn>
            </div>
          );
        })}
        <Btn onClick={() => setForm(p => ({ ...p, serviceLinks: [...(p.serviceLinks || []), { name: '', path: '' }] }))} variant="ghost" size="sm"><Plus size={12} /> Add Service Link</Btn>
      </Card>
      <Card className="mb-4">
        <h3 className="font-bold text-slate-900 mb-4">Useful Links</h3>
        {(form.usefulLinks || []).map((link, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <input type="text" value={link.name} onChange={e => setForm(p => ({ ...p, usefulLinks: p.usefulLinks.map((x, j) => j === i ? { ...x, name: e.target.value } : x) }))}
              className="flex-1 px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm" placeholder="Link name..." />
            <input type="text" value={link.path} onChange={e => setForm(p => ({ ...p, usefulLinks: p.usefulLinks.map((x, j) => j === i ? { ...x, path: e.target.value } : x) }))}
              className="flex-1 px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm" placeholder="/path..." />
            <Btn onClick={() => setForm(p => ({ ...p, usefulLinks: p.usefulLinks.filter((_, j) => j !== i) }))} variant="danger" size="sm"><Trash2 size={12} /></Btn>
          </div>
        ))}
        <Btn onClick={() => setForm(p => ({ ...p, usefulLinks: [...(p.usefulLinks || []), { name: '', path: '' }] }))} variant="ghost" size="sm"><Plus size={12} /> Add</Btn>
      </Card>
      <Btn onClick={save} variant="primary"><Save size={14} /> Save All Changes</Btn>
    </div>
  );
};

// ─── TRUSTED PARTNERS MANAGER ─────────────────────────────────────────────────

const PartnersManager = () => {
  const { data, update } = useAdmin();
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({});
  const [adding, setAdding] = useState(false);

  const startEdit = (item) => { setEditing(item.id); setForm({ ...item }); setAdding(false); };
  const startAdd = () => { setAdding(true); setEditing(null); setForm({ id: Date.now(), name: '', url: '' }); };
  const cancel = () => { setEditing(null); setAdding(false); setForm({}); };
  const save = () => {
    if (!form.name) return;
    if (adding) update('trustedPartners', [...data.trustedPartners, form]);
    else update('trustedPartners', data.trustedPartners.map(p => p.id === editing ? form : p));
    cancel();
  };
  const remove = (id) => { if (window.confirm('Remove partner?')) update('trustedPartners', data.trustedPartners.filter(p => p.id !== id)); };

  return (
    <div>
      <SectionHeader title="Trusted Partners" subtitle="Manage partner logos in the marquee" />
      <div className="flex justify-end mb-4"><Btn onClick={startAdd} variant="primary"><Plus size={14} /> Add Partner</Btn></div>
      {(editing !== null || adding) && (
        <Card className="mb-6 border-yellow-200 bg-yellow-50">
          <h3 className="font-bold text-slate-900 mb-4">{adding ? 'Add Partner' : 'Edit Partner'}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Partner Name" value={form.name || ''} onChange={v => setForm(p => ({ ...p, name: v }))} required />
            <Input label="Logo URL" value={form.url || ''} onChange={v => setForm(p => ({ ...p, url: v }))} placeholder="/part1.jpg or https://..." />
          </div>
          <div className="flex gap-3 mt-4">
            <Btn onClick={save} variant="primary"><Save size={14} /> Save</Btn>
            <Btn onClick={cancel} variant="ghost"><X size={14} /> Cancel</Btn>
          </div>
        </Card>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.trustedPartners.map((p) => (
          <Card key={p.id} className="text-center">
            <div className="h-16 flex items-center justify-center mb-3 bg-gray-50 rounded-lg p-2">
              <img src={p.url} alt={p.name} className="max-h-full max-w-full object-contain" onError={e => { e.target.style.display = 'none'; }} />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">{p.name}</h4>
            <div className="flex gap-2 justify-center mt-3">
              <Btn onClick={() => startEdit(p)} variant="ghost" size="sm"><Edit3 size={12} /></Btn>
              <Btn onClick={() => remove(p.id)} variant="danger" size="sm"><Trash2 size={12} /></Btn>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

// ─── SHARED HELPERS FOR PAGE MANAGERS ────────────────────────────────────────

const HeroTextEditor = ({ title, subtitle, onSave }) => {
  const [t, setT] = useState(title);
  const [s, setS] = useState(subtitle);
  // Sync when parent passes new values (e.g. tab switch)
  useEffect(() => { setT(title); }, [title]);
  useEffect(() => { setS(subtitle); }, [subtitle]);
  return (
    <Card>
      <div className="space-y-4">
        <Input label="Page Title" value={t} onChange={setT} />
        <Textarea label="Page Subtitle" value={s} onChange={setS} rows={2} />
      </div>
      <div className="mt-4"><Btn onClick={() => onSave(t, s)} variant="primary"><Save size={14} /> Save</Btn></div>
    </Card>
  );
};

const InlineListEditor = ({ items, fields, onSave }) => {
  // Guard: items may be undefined if data key doesn't exist yet
  const safeItems = (items || []).map((x, i) => ({ ...x, _id: x.id != null ? x.id : i }));
  const [list, setList] = useState(safeItems);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({});
  const [adding, setAdding] = useState(false);

  // Sync list when items prop changes (e.g. after a save from parent)
  useEffect(() => {
    setList((items || []).map((x, i) => ({ ...x, _id: x.id != null ? x.id : i })));
  }, [items]);

  const blank = fields.reduce((a, f) => ({ ...a, [f]: '' }), { _id: Date.now() });
  const startEdit = (item) => { setEditing(item._id); setForm({ ...item }); setAdding(false); };
  const startAdd = () => { setAdding(true); setEditing(null); setForm({ ...blank, _id: Date.now() }); };
  const cancel = () => { setEditing(null); setAdding(false); setForm({}); };

  const persist = (next) => {
    setList(next);
    // Strip internal _id, keep original id if it existed
    onSave(next.map(({ _id, ...rest }) => ({ id: _id, ...rest })));
  };

  const save = () => {
    const next = adding ? [...list, form] : list.map(x => x._id === editing ? form : x);
    persist(next);
    cancel();
  };

  const remove = (_id) => {
    if (!window.confirm('Delete this item?')) return;
    persist(list.filter(x => x._id !== _id));
  };

  return (
    <div>
      <div className="flex justify-end mb-4"><Btn onClick={startAdd} variant="primary"><Plus size={14} /> Add Item</Btn></div>
      {(editing !== null || adding) && (
        <Card className="mb-4 border-yellow-200 bg-yellow-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fields.map(f => (
              <div key={f} className={fields.length === 1 || f === 'desc' || f === 'review' || f === 'text' || f === 'answer' ? 'sm:col-span-2' : ''}>
                {(f === 'desc' || f === 'review' || f === 'text' || f === 'answer')
                  ? <Textarea label={f.charAt(0).toUpperCase() + f.slice(1)} value={form[f] || ''} onChange={v => setForm(p => ({ ...p, [f]: v }))} rows={3} />
                  : <Input label={f.charAt(0).toUpperCase() + f.slice(1)} value={form[f] || ''} onChange={v => setForm(p => ({ ...p, [f]: v }))} />
                }
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt-4">
            <Btn onClick={save} variant="primary"><Save size={14} /> Save</Btn>
            <Btn onClick={cancel} variant="ghost"><X size={14} /> Cancel</Btn>
          </div>
        </Card>
      )}
      <div className="space-y-3">
        {list.map((item) => (
          <Card key={item._id} className="flex items-start gap-4">
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-slate-900 text-sm">{item[fields[0]]}</h4>
              {fields[1] && <p className="text-gray-500 text-xs mt-1 line-clamp-2">{item[fields[1]]}</p>}
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <Btn onClick={() => startEdit(item)} variant="ghost" size="sm"><Edit3 size={12} /></Btn>
              <Btn onClick={() => remove(item._id)} variant="danger" size="sm"><Trash2 size={12} /></Btn>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

// ─── STRUCTURAL PAGE MANAGER ──────────────────────────────────────────────────

const GenericListManager = ({ title, subtitle, section, fields }) => {
  const { data, update } = useAdmin();
  const items = data[section] || [];
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({});
  const [adding, setAdding] = useState(false);

  const blank = fields.reduce((acc, f) => ({ ...acc, [f.key]: '' }), { id: Date.now() });
  const startEdit = (item) => { setEditing(item.id); setForm({ ...item }); setAdding(false); };
  const startAdd = () => { setAdding(true); setEditing(null); setForm({ ...blank, id: Date.now() }); };
  const cancel = () => { setEditing(null); setAdding(false); setForm({}); };
  const save = () => {
    if (adding) update(section, [...items, form]);
    else update(section, items.map(x => x.id === editing ? form : x));
    cancel();
  };
  const remove = (id) => { if (window.confirm('Delete?')) update(section, items.filter(x => x.id !== id)); };

  return (
    <div>
      <SectionHeader title={title} subtitle={subtitle} />
      <div className="flex justify-end mb-4"><Btn onClick={startAdd} variant="primary"><Plus size={14} /> Add Item</Btn></div>
      {(editing !== null || adding) && (
        <Card className="mb-6 border-yellow-200 bg-yellow-50">
          <h3 className="font-bold text-slate-900 mb-4">{adding ? 'Add' : 'Edit'} Item</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fields.map(f => f.rows
              ? <div key={f.key} className="sm:col-span-2"><Textarea label={f.label} value={form[f.key] || ''} onChange={v => setForm(p => ({ ...p, [f.key]: v }))} rows={f.rows} /></div>
              : <Input key={f.key} label={f.label} value={form[f.key] || ''} onChange={v => setForm(p => ({ ...p, [f.key]: v }))} />
            )}
          </div>
          <div className="flex gap-3 mt-4">
            <Btn onClick={save} variant="primary"><Save size={14} /> Save</Btn>
            <Btn onClick={cancel} variant="ghost"><X size={14} /> Cancel</Btn>
          </div>
        </Card>
      )}
      <div className="space-y-3">
        {items.map((item) => (
          <Card key={item.id} className="flex items-start gap-4">
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-slate-900 text-sm">{item[fields[0].key]}</h4>
              {fields[1] && <p className="text-gray-500 text-xs mt-1 line-clamp-2">{item[fields[1].key]}</p>}
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <Btn onClick={() => startEdit(item)} variant="ghost" size="sm"><Edit3 size={12} /></Btn>
              <Btn onClick={() => remove(item.id)} variant="danger" size="sm"><Trash2 size={12} /></Btn>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

const StructuralPageManager = () => {
  const { data, update } = useAdmin();
  const [tab, setTab] = useState('services');

  const tabs = [
    { id: 'services', label: 'Services' },
    { id: 'whyChooseUs', label: 'Why Choose Us' },
    { id: 'stats', label: 'Stats' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'hero', label: 'Hero Text' },
  ];

  const saveHero = (heroTitle, heroSubtitle) => {
    update('structuralConsultancyContent', { ...data.structuralConsultancyContent, heroTitle, heroSubtitle });
    toast('Saved!');
  };

  const saveList = (key, items) => {
    update('structuralConsultancyContent', { ...data.structuralConsultancyContent, [key]: items });
    toast('Saved!');
  };

  const sc = data.structuralConsultancyContent || {};

  return (
    <div>
      <SectionHeader title="Structural Consultancy Page" subtitle="Manage all content on the Structural Consultancy page" />
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${tab === t.id ? 'bg-yellow-500 text-black' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'hero' && (
        <HeroTextEditor
          title={sc.heroTitle} subtitle={sc.heroSubtitle}
          onSave={saveHero}
        />
      )}
      {tab === 'services' && (
        <InlineListEditor
          items={sc.services} fields={['title', 'desc']}
          onSave={items => saveList('services', items)}
        />
      )}
      {tab === 'whyChooseUs' && (
        <InlineListEditor
          items={sc.whyChooseUs} fields={['title', 'desc']}
          onSave={items => saveList('whyChooseUs', items)}
        />
      )}
      {tab === 'stats' && (
        <InlineListEditor
          items={sc.stats} fields={['value', 'label']}
          onSave={items => saveList('stats', items)}
        />
      )}
      {tab === 'testimonials' && (
        <InlineListEditor
          items={sc.testimonials} fields={['name', 'review']}
          onSave={items => saveList('testimonials', items)}
        />
      )}
      {tab === 'faqs' && (
        <InlineListEditor
          items={sc.faqs} fields={['question', 'answer']}
          onSave={items => saveList('faqs', items)}
        />
      )}
    </div>
  );
};

// ─── BIM PAGE MANAGER ─────────────────────────────────────────────────────────

const BimPageManager = () => {
  const { data, update } = useAdmin();
  const [tab, setTab] = useState('sectors');

  const tabs = [
    { id: 'sectors', label: 'Sectors' },
    { id: 'dimensions', label: 'BIM Dimensions' },
    { id: 'steps', label: 'Implementation Steps' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'metrics', label: 'Impact Metrics' },
    { id: 'hero', label: 'Hero Text' },
  ];

  const saveList = (key, items) => { update('bimConsultancyContent', { ...data.bimConsultancyContent, [key]: items }); toast('Saved!'); };
  const saveHero = (heroTitle, heroSubtitle) => { update('bimConsultancyContent', { ...data.bimConsultancyContent, heroTitle, heroSubtitle }); toast('Saved!'); };

  const bim = data.bimConsultancyContent || {};

  return (
    <div>
      <SectionHeader title="BIM Consultancy Page" subtitle="Manage all content on the BIM Consultancy page" />
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${tab === t.id ? 'bg-yellow-500 text-black' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'hero' && <HeroTextEditor title={bim.heroTitle} subtitle={bim.heroSubtitle} onSave={saveHero} />}
      {tab === 'sectors' && <InlineListEditor items={bim.sectors} fields={['title', 'desc']} onSave={items => saveList('sectors', items)} />}
      {tab === 'dimensions' && <InlineListEditor items={bim.dimensions} fields={['dimId', 'title', 'desc']} onSave={items => saveList('dimensions', items)} />}
      {tab === 'steps' && <InlineListEditor items={bim.implementationSteps} fields={['step', 'title', 'desc']} onSave={items => saveList('implementationSteps', items)} />}
      {tab === 'testimonials' && <InlineListEditor items={bim.testimonials} fields={['text', 'role']} onSave={items => saveList('testimonials', items)} />}
      {tab === 'metrics' && <InlineListEditor items={bim.impactMetrics} fields={['value', 'label']} onSave={items => saveList('impactMetrics', items)} />}
    </div>
  );
};

// ─── CONSTRUCTION PAGE MANAGER ────────────────────────────────────────────────

const ConstructionPageManager = () => {
  const { data, update } = useAdmin();
  const [tab, setTab] = useState('services');

  const tabs = [
    { id: 'services', label: 'Services' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'hero', label: 'Hero & Stats' },
  ];

  const saveList = (key, items) => { update('serviceDetailsContent', { ...data.serviceDetailsContent, [key]: items }); toast('Saved!'); };

  const sd = data.serviceDetailsContent || {};
  const [heroForm, setHeroForm] = useState({
    heroTitle: sd.heroTitle || '', heroSubtitle: sd.heroSubtitle || '',
    aboutHeadline: sd.aboutHeadline || '', aboutDesc: sd.aboutDesc || '',
    stat1Value: sd.stat1Value || '', stat1Label: sd.stat1Label || '',
    stat2Value: sd.stat2Value || '', stat2Label: sd.stat2Label || '',
  });

  // Sync heroForm when data changes (e.g. after restore)
  useEffect(() => {
    const s = data.serviceDetailsContent || {};
    setHeroForm({
      heroTitle: s.heroTitle || '', heroSubtitle: s.heroSubtitle || '',
      aboutHeadline: s.aboutHeadline || '', aboutDesc: s.aboutDesc || '',
      stat1Value: s.stat1Value || '', stat1Label: s.stat1Label || '',
      stat2Value: s.stat2Value || '', stat2Label: s.stat2Label || '',
    });
  }, [data.serviceDetailsContent]);

  const saveHero = () => { update('serviceDetailsContent', { ...data.serviceDetailsContent, ...heroForm }); toast('Saved!'); };

  return (
    <div>
      <SectionHeader title="Construction Services Page" subtitle="Manage all content on the Services page" />
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${tab === t.id ? 'bg-yellow-500 text-black' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'hero' && (
        <Card>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Hero Title" value={heroForm.heroTitle} onChange={v => setHeroForm(p => ({ ...p, heroTitle: v }))} />
            <Input label="Hero Subtitle" value={heroForm.heroSubtitle} onChange={v => setHeroForm(p => ({ ...p, heroSubtitle: v }))} />
            <Input label="About Headline" value={heroForm.aboutHeadline} onChange={v => setHeroForm(p => ({ ...p, aboutHeadline: v }))} />
            <Input label="Stat 1 Value" value={heroForm.stat1Value} onChange={v => setHeroForm(p => ({ ...p, stat1Value: v }))} />
            <Input label="Stat 1 Label" value={heroForm.stat1Label} onChange={v => setHeroForm(p => ({ ...p, stat1Label: v }))} />
            <Input label="Stat 2 Value" value={heroForm.stat2Value} onChange={v => setHeroForm(p => ({ ...p, stat2Value: v }))} />
            <Input label="Stat 2 Label" value={heroForm.stat2Label} onChange={v => setHeroForm(p => ({ ...p, stat2Label: v }))} />
          </div>
          <div className="mt-4"><Textarea label="About Description" value={heroForm.aboutDesc} onChange={v => setHeroForm(p => ({ ...p, aboutDesc: v }))} rows={3} /></div>
          <div className="mt-4"><Btn onClick={saveHero} variant="primary"><Save size={14} /> Save</Btn></div>
        </Card>
      )}
      {tab === 'services' && <InlineListEditor items={sd.constructionServices} fields={['title', 'desc']} onSave={items => saveList('constructionServices', items)} />}
      {tab === 'reviews' && <InlineListEditor items={sd.reviews} fields={['name', 'role', 'text', 'initial']} onSave={items => saveList('reviews', items)} />}
    </div>
  );
};

// ─── ABOUT IMAGES MANAGER ─────────────────────────────────────────────────────

const AboutImagesManager = () => {
  const { data, update } = useAdmin();
  const [form, setForm] = useState({
    image1: data.aboutContent?.image1 || '',
    image2: data.aboutContent?.image2 || '',
  });
  const dirty =
    form.image1 !== (data.aboutContent?.image1 || '') ||
    form.image2 !== (data.aboutContent?.image2 || '');

  const save = () => {
    update('aboutContent', { ...data.aboutContent, image1: form.image1, image2: form.image2 });
    toast('About images saved!');
  };
  const discard = () => setForm({ image1: data.aboutContent?.image1 || '', image2: data.aboutContent?.image2 || '' });

  return (
    <div>
      <SectionHeader title="About Section Images" subtitle="The two collage images shown in the 'Complete Engineering Solutions Under One Roof' section" />
      <UnsavedBanner dirty={dirty} onSave={save} onDiscard={discard} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Card>
          <h3 className="font-semibold text-slate-900 mb-1 text-sm">Top-Left Image</h3>
          <p className="text-xs text-gray-400 mb-4">The smaller image shown at the top-left of the collage</p>
          <ImageInput label="Image 1" value={form.image1} onChange={v => setForm(p => ({ ...p, image1: v }))} />
        </Card>
        <Card>
          <h3 className="font-semibold text-slate-900 mb-1 text-sm">Bottom-Right Image</h3>
          <p className="text-xs text-gray-400 mb-4">The larger image shown at the bottom-right of the collage</p>
          <ImageInput label="Image 2" value={form.image2} onChange={v => setForm(p => ({ ...p, image2: v }))} />
        </Card>
      </div>
      <div className="mt-4">
        <Btn onClick={save} variant="primary" disabled={!dirty}><Save size={14} /> Save Changes</Btn>
      </div>
    </div>
  );
};

// ─── FLIPBOOKS MANAGER ────────────────────────────────────────────────────────

const uploadPdfToServer = async (file) => {
  const fd = new FormData();
  fd.append('pdf', file);
  const res = await fetch('/api/upload/pdf', {
    method: 'POST',
    body: fd,
    headers: { ...(getToken() ? { Authorization: `Bearer ${getToken()}` } : {}) },
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || `Upload failed (${res.status})`);
  }
  return res.json();
};

const PdfInput = ({ label, value, onChange }) => {
  const [uploading, setUploading] = useState(false);
  const [uploadErr, setUploadErr] = useState('');
  const [serverPdfs, setServerPdfs] = useState([]);
  const [showPicker, setShowPicker] = useState(false);
  const fileRef = useRef(null);

  const loadPdfs = useCallback(async () => {
    try {
      const res = await apiFetch('/api/pdfs');
      if (res.ok) setServerPdfs(await res.json());
    } catch { }
  }, []);

  useEffect(() => { if (showPicker) loadPdfs(); }, [showPicker, loadPdfs]);

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.type !== 'application/pdf') { setUploadErr('Only PDF files allowed.'); return; }
    if (file.size > 50 * 1024 * 1024) { setUploadErr('PDF must be under 50 MB.'); return; }
    setUploading(true);
    setUploadErr('');
    try {
      const { url } = await uploadPdfToServer(file);
      onChange(url);
      toast('PDF uploaded!');
    } catch (e) { setUploadErr(e.message); }
    finally { setUploading(false); }
  };

  const fmtSize = (b) => b < 1024 * 1024 ? `${(b / 1024).toFixed(0)} KB` : `${(b / 1024 / 1024).toFixed(1)} MB`;

  return (
    <div className="space-y-1.5">
      {label && <label className="text-xs font-semibold text-slate-600 block">{label}</label>}
      <div className="flex gap-2 items-center">
        <input type="text" value={value} onChange={e => onChange(e.target.value)}
          placeholder="/pdfs/your-file.pdf"
          className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none text-sm font-mono" />
        <Btn onClick={() => fileRef.current?.click()} variant="ghost" size="sm" disabled={uploading}>
          {uploading ? <span className="w-3 h-3 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" /> : <Upload size={13} />}
          Upload
        </Btn>
        <Btn onClick={() => setShowPicker(v => !v)} variant="ghost" size="sm">
          <FolderOpen size={13} /> Pick
        </Btn>
        <input ref={fileRef} type="file" accept=".pdf,application/pdf" className="hidden" onChange={handleFile} />
      </div>
      {uploadErr && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle size={11} />{uploadErr}</p>}
      {value && <p className="text-xs text-gray-400 truncate">Current: {value}</p>}
      {showPicker && (
        <div className="border border-gray-200 rounded-2xl bg-white shadow-lg overflow-hidden mt-1">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
            <h4 className="font-semibold text-slate-900 text-sm">Server PDFs</h4>
            <button onClick={() => setShowPicker(false)} className="p-1 rounded-lg hover:bg-gray-100 text-gray-400"><X size={14} /></button>
          </div>
          <div className="p-3 max-h-48 overflow-y-auto space-y-1">
            {serverPdfs.length === 0 ? (
              <p className="text-center text-gray-400 text-sm py-4">No PDFs uploaded yet.</p>
            ) : serverPdfs.map(pdf => (
              <button key={pdf.filename} onClick={() => { onChange(pdf.url); setShowPicker(false); }}
                className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-yellow-50 hover:border-yellow-200 border border-transparent transition-all text-left">
                <FileText size={16} className="text-red-500 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900 truncate">{pdf.filename}</p>
                  <p className="text-xs text-gray-400">{fmtSize(pdf.size)}</p>
                </div>
                {value === pdf.url && <CheckCircle size={14} className="text-yellow-500 flex-shrink-0" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const FlipbooksManager = () => {
  const { data, update } = useAdmin();
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({});
  const [adding, setAdding] = useState(false);

  const startEdit = (item) => { setEditing(item.id); setForm({ ...item }); setAdding(false); };
  const startAdd = () => { setAdding(true); setEditing(null); setForm({ id: Date.now(), title: '', pdfUrl: '' }); };
  const cancel = () => { setEditing(null); setAdding(false); setForm({}); };

  const save = () => {
    if (!form.title || !form.pdfUrl) return;
    const flipbooks = data.flipbooks || [];
    if (adding) update('flipbooks', [...flipbooks, form]);
    else update('flipbooks', flipbooks.map(f => f.id === editing ? form : f));
    toast(adding ? 'Flipbook added!' : 'Flipbook updated!');
    cancel();
  };

  const remove = (id) => {
    if (window.confirm('Remove this flipbook?')) {
      update('flipbooks', (data.flipbooks || []).filter(f => f.id !== id));
      toast('Flipbook removed', 'info');
    }
  };

  const flipbooks = data.flipbooks || [];

  return (
    <div>
      <SectionHeader
        title="PDF Flipbooks"
        subtitle="Manage the interactive PDF flipbooks shown on the homepage"
        action={<Btn onClick={startAdd} variant="primary"><Plus size={14} /> Add Flipbook</Btn>}
      />

      {(editing !== null || adding) && (
        <Card className="mb-6 border-yellow-200 bg-yellow-50">
          <h3 className="font-bold text-slate-900 mb-4">{adding ? 'Add Flipbook' : 'Edit Flipbook'}</h3>
          <div className="space-y-4">
            <Input label="Title" value={form.title || ''} onChange={v => setForm(p => ({ ...p, title: v }))}
              placeholder="e.g. Hospitality Portfolio" required />
            <PdfInput label="PDF File" value={form.pdfUrl || ''} onChange={v => setForm(p => ({ ...p, pdfUrl: v }))} />
          </div>
          <div className="flex gap-3 mt-4">
            <Btn onClick={save} variant="primary" disabled={!form.title || !form.pdfUrl}><Save size={14} /> Save</Btn>
            <Btn onClick={cancel} variant="ghost"><X size={14} /> Cancel</Btn>
          </div>
        </Card>
      )}

      <div className="space-y-2">
        {flipbooks.map((fb, i) => (
          <Card key={fb.id} className="flex items-center gap-4 !py-4">
            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
              <FileText size={18} className="text-red-500" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-slate-900 text-sm">{fb.title}</h4>
              <p className="text-gray-400 text-xs mt-0.5 truncate font-mono">{fb.pdfUrl}</p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <Btn onClick={() => startEdit(fb)} variant="ghost" size="sm"><Edit3 size={12} /> Edit</Btn>
              <Btn onClick={() => remove(fb.id)} variant="danger" size="sm"><Trash2 size={12} /></Btn>
            </div>
          </Card>
        ))}
        {flipbooks.length === 0 && (
          <Card className="text-center py-8 text-gray-400 text-sm">
            No flipbooks yet. Add one to show PDFs on the homepage.
          </Card>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
