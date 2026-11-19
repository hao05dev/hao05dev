// Copies the production build from /dist to the repository root so GitHub Pages
// ("Deploy from a branch", root folder) can serve it directly.
import { cpSync, rmSync, existsSync, readdirSync } from 'node:fs';

if (!existsSync('dist/index.html')) {
  console.error('dist/index.html not found — run `npm run build` first.');
  process.exit(1);
}

rmSync('assets', { recursive: true, force: true });
// Copy entry by entry: cpSync('dist', '.') crashes Node on Windows.
for (const entry of readdirSync('dist')) {
  cpSync(`dist/${entry}`, entry, { recursive: true });
}
console.log('Copied dist/ to repository root.');
