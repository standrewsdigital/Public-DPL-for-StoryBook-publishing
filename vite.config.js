import { defineConfig } from 'vite'
import { directoryPlugin } from 'vite-plugin-list-directory-contents'

export default defineConfig({
  build: {
    outDir: 'dist-vite',
    rollupOptions: {
      input: 'scripts/form-elements.js'
    },
    sourcemap: true
  },
  plugins: [directoryPlugin({
    baseDir: __dirname,
    filterList: ['.md', '.js', 'scss-styles', 'node_modules', '.git', '.vscode', 'compiled-css', 'assets', 'package.json', 'package-lock.json', 'dist-vite', 'scripts', '.gitignore', '.gitlab-ci.yml', 'NPMVERSION.md', 'README.md', 'index.js', 'uploadToFtps.cjs', 'vite.config.js', '.env']
  })]
})
