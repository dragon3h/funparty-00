const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[main].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new webpack.ProgressPlugin(),    
    new HtmlWebpackPlugin({
      title: 'Funparty',
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
};