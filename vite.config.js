import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

// Directories for grouping scripts
const mainDir = resolve(__dirname, 'scripts/main');
const individualOnlyDir = resolve(__dirname, 'scripts/individual-only');

// Temporary entry file for bundling all main scripts
const tempEntryFile = resolve(__dirname, 'scripts/temp-main-entry.js');

// Create an entry file that imports all scripts in the 'scripts/main' directory
const mainFiles = fs.readdirSync(mainDir).filter(file => file.endsWith('.js'));
const imports = mainFiles.map(file => `import './main/${file}';`).join('\n');
fs.writeFileSync(tempEntryFile, imports);

// Function to create input object for individual files
function createIndividualEntries(dirs) {
  const entries = {};
  
  dirs.forEach(dir => {
    const relativeDir = dir.replace(__dirname, '').replace(/\\/g, '/'); // Ensure correct relative paths
    const files = fs.readdirSync(dir).filter(file => file.endsWith('.js'));
    files.forEach(file => {
      const name = file.replace('.js', '');
      entries[`separate-js/${name}`] = `${relativeDir}/${file}`;
    });
  });

  return entries;
}

// Create entries for individual files
const individualEntries = createIndividualEntries([mainDir, individualOnlyDir]);

export default defineConfig({
  build: {
    sourcemap: true,  // Enable sourcemaps for the build
    rollupOptions: {
      input: {
        main: tempEntryFile,  // Bundled entry for 'main.js'
        ...individualEntries  // Individual entries for separate JS files
      },
      output: {
        dir: resolve(__dirname, 'assets'),  // Output directory for all files
        entryFileNames: (chunkInfo) => {
          // Determine output directory based on entry point
          return chunkInfo.name === 'main'
            ? 'main.js'  // Single bundled file for 'main'
            : 'separate-js/[name].js';  // Separate files for individual entries
        },
        format: 'es',  // Use ES module format to support multiple entry points
        inlineDynamicImports: false,  // Explicitly set to false
      }
    }
  }
});
