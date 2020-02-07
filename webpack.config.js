const path = require('path');

const srcDir = path.join(__dirname, 'client/src');
const distDir = path.join(__dirname, 'client/dist');

module.exports = {
  entry: srcDir,
  output: {
    filename: 'relatedTracks_bundle.js',
    path: distDir,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  watch: false,
};
