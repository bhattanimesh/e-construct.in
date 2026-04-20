# E-Construct Server

Express API that handles image uploads and serves the built frontend.

## Local Development

```bash
cd server
npm install
npm run dev        # starts on port 5000
```

In a separate terminal:
```bash
# root of project
npm run dev        # Vite on port 5173, proxies /api/* → localhost:5000
```

## cPanel Deployment

### 1. Build the frontend
```bash
npm run build      # outputs to /dist
```

### 2. Upload files to cPanel
Upload the entire project (or at minimum):
- `dist/`
- `server/`
- `public/uploads/` (create this folder, set permissions to 755)

### 3. Install server dependencies
In cPanel Terminal or SSH:
```bash
cd /home/youraccount/public_html/server
npm install --production
```

### 4. Set up Node.js app in cPanel
- Go to **Setup Node.js App**
- Application root: `server`
- Application startup file: `index.js`
- Node version: 18+
- Environment variables:
  - `PORT` = the port cPanel assigns (usually auto-set)
  - `SITE_URL` = `https://your-domain.com`
- Click **Create** then **Run NPM Install**

### 5. That's it
The server will:
- Serve the built React app from `../dist`
- Handle image uploads at `POST /api/upload`
- Store images in `../public/uploads/`
- Serve uploaded images at `/uploads/filename.jpg`

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/api/upload` | Upload an image (multipart `image` field) |
| `GET` | `/api/uploads` | List all uploaded images |
| `DELETE` | `/api/uploads/:filename` | Delete an uploaded image |

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `5000` | Server port |
| `SITE_URL` | — | Production domain for CORS (e.g. `https://e-construct.in`) |
