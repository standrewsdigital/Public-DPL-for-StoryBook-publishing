import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist-vite',
    rollupOptions: {
      input: 'scripts/form-elements.js',
    },
    sourcemap: true
  }
});
