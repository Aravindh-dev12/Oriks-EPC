import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function copyDirFiltered(src: string, dest: string) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirFiltered(srcPath, destPath);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      // Exclude multi-gigabyte raw drone footage (.mp4, .dng) from dist to avoid ENOSPC
      if (['.mp4', '.dng', '.mov', '.avi'].includes(ext)) {
        continue;
      }
      try {
        const stats = fs.statSync(srcPath);
        if (stats.size > 25 * 1024 * 1024) continue;
        fs.copyFileSync(srcPath, destPath);
      } catch (e) {}
    }
  }
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'selective-public-copy',
      closeBundle() {
        const publicDir = path.resolve(__dirname, 'public');
        const outDir = path.resolve(__dirname, 'dist');
        copyDirFiltered(publicDir, outDir);
      }
    }
  ],
  build: {
    copyPublicDir: false,
    sourcemap: false,
    target: 'es2022'
  }
});
