const path = require('path');
const WebpackUserscript = require('webpack-userscript');

module.exports = {
  entry: './src/index.js',
  mode: 'none',
  output: {
    libraryTarget: 'var',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/webpack')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ],
  },
  plugins: [
    new WebpackUserscript()
  ]
};
