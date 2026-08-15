import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  build: {
    // Raise chunk warning threshold (react-pdf is legitimately large)
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Manual chunk splitting — keeps vendor code separate so browsers
        // can cache it independently of app code changes
        manualChunks: {
          // Core React runtime — changes almost never
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // Animation library — large, rarely changes
          'vendor-motion': ['framer-motion'],
          // Icons — large, rarely changes
          'vendor-icons': ['lucide-react'],
          // PDF viewer — very large, only needed on flipbook pages
          'vendor-pdf': ['react-pdf', 'react-pageflip'],
          // OpenAI SDK — only needed for chatbot
          'vendor-openai': ['openai'],
        },
      },
    },
    // Enable minification
    minify: 'esbuild',
    // Generate source maps only in dev
    sourcemap: false,
    // CSS code splitting
    cssCodeSplit: true,
    // Target modern browsers for smaller output
    target: 'es2020',
  },

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
      '/uploads': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        bypass(req) {
          // Serve static files from public/uploads directly without proxying
          return req.url;
        },
      },
    },
  },
})
