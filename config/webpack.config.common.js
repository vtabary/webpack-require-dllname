const path = require('path');
const webpack = require('webpack');

module.exports = {
  target: 'web',

  output: {
    path: path.resolve(path.join(__dirname, '../dist')),
    libraryTarget: 'umd',
    chunkFilename: '[id].chunk.js'
  },

  cache: false,
  resolve: {
    extensions: ['.js'],
  }

};
