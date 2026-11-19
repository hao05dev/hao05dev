import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Source lives in /src (src/index.html is the entry).
// `npm run build` -> /dist (deployed by the GitHub Actions workflow).
// `npm run build:pages` additionally copies the build to the repo root,
// for GitHub Pages set to "Deploy from a branch".
export default defineConfig({
  root: 'src',
  base: './',
  publicDir: '../public',
  plugins: [react()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
