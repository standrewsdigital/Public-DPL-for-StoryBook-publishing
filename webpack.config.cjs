const path = require('path'); // Add this line to import the 'path' module

module.exports = {
  entry: {
    form_elements: './scripts/form-elements.js',
    // buttons: './scripts/buttons.js', // Additional scripts
    // gallery: './scripts/gallery.js'
  },
  output: {
    filename: '[name].bundle.js', // Use the entry point name in the output file
    path: path.resolve(__dirname, 'dist-webpack'), // Output directory
  },
  target: 'web', // Specify that we're bundling for the web, not Node.js
  mode: 'development', // Can also be 'production' for optimized builds
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};
