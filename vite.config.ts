import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // Pre-bundle lucide-react into a single ESM module so individual icon
    // files (e.g. fingerprint.js) aren't served as separate URLs — those
    // names trip ad/tracker blockers and crash the dev bundle.
    include: ['lucide-react'],
  },
});
