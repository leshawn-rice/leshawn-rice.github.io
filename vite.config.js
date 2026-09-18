import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Deployed at the domain root (leshawnrice.com via the CNAME in public/),
// so the base stays '/' rather than a repo subpath.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 2048,
  },
});
