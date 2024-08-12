// esbuild.js
const esbuild = require('esbuild');

esbuild.build({
// Must add any future scripts to the array below:
  entryPoints: ['scripts/form-elements.js'],
  bundle: true,
  minify: true,
  outdir: 'dist-esbuild',
  sourcemap: true,
  format: 'esm',
  //   watch: true, //Feature doesn't work.
}).catch(() => process.exit(1));
