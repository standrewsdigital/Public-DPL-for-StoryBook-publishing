import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';

/**
 * Helper: Recursively gets all files within a specific directory
 * (Used to populate the lists inside the folders)
 */
const getAllFilesUnder = (dir, filterList) => {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });

  for (const dirent of list) {
    if (filterList.includes(dirent.name)) continue;

    const res = path.resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      results = results.concat(getAllFilesUnder(res, filterList));
    } else {
      results.push(res);
    }
  }
  return results;
};

const unslugify = (slug) => slug.replace(/\-/g, " ")
  .replace(/\w\S*/g,
    (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
);

/**
 * Custom Plugin
 */
const fileListingPlugin = () => {
  return {
    name: 'vite-plugin-custom-file-grouping',
    transformIndexHtml(html) {
      const baseDir = path.resolve(__dirname, 'html-examples');
      const filterList = ['.git', '.vscode', 'node_modules', 'index.html'];

      try {
        // This object will store our groups: { "Icons": [...files], "Patterns": [...files] }
        const groups = {};

        // 1. Read the immediate children of 'html-examples'
        const entries = fs.readdirSync(baseDir, { withFileTypes: true });

        for (const entry of entries) {
          if (filterList.includes(entry.name)) continue;

          const fullPath = path.resolve(baseDir, entry.name);

          if (entry.isDirectory()) {
            // If it's a folder, use the folder name as the key and get all files inside
            groups[entry.name] = getAllFilesUnder(fullPath, filterList);
          }
        }

        // 2. Convert the groups object into HTML string
        const htmlOutput = Object.entries(groups)
          .map(([groupName, files]) => {
            const heading = `<h2>${unslugify(groupName)}</h2>`;

            // Create the list of links for this group
            const listItems = files
              .map((filePath) => {
                // Convert absolute path to a web-friendly relative path
                const relativePath = path.relative(path.resolve(__dirname), filePath)
                  .replace(/\\/g, '/');

                // Prettify it and remove .html
                const fileName = unslugify(path.basename(filePath)).slice(0, -5);
                return `<li><a href="/${relativePath}">${fileName}</a></li>`;
              })
              .join('');

            return `${heading}\n<ul>\n${listItems}\n</ul>`;
          })
          .join('');

        return html.replace(
          '{%showFilePaths%}',
          `<div class="file-navigation">\n${htmlOutput}\n</div>`
        );
      } catch (err) {
        console.error('Error generating grouped file list:', err);
        return html;
      }
    },
  };
};

export default defineConfig({
  plugins: [fileListingPlugin()],
});
