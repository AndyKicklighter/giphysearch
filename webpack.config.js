const path = require('path');

const mode = process.env.NODE_ENV || 'development';

console.log('Mode: ', mode);
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode,
  entry: {
    app: './src/index.js',
  },
  devServer: {
    contentBase: './dist',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        }
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      { from: './public', to: './' }
    ])
  ],
};