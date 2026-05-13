import { defineConfig } from 'vite'
import path from 'node:path'
import { directoryPlugin } from 'vite-plugin-list-directory-contents'

export default defineConfig({
  build: {
    outDir: 'dist-vite',
    rollupOptions: {
      input: 'scripts/form-elements.js'
    },
    sourcemap: true
  },

  plugins: [
    directoryPlugin({
      baseDir: path.resolve(__dirname, 'html-examples'),

      filterList: [
        '.git',
        '.vscode',
        'node_modules'
      ]
    })
  ]
})