const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');

module.exports = webpackMerge(commonConfig, {
  output: {
    filename: 'final/[name].bundle.js'
  },

  entry: {
    'main':      ['./src/final/index']
  },

  resolve: {
    alias: {
      'mydll': path.resolve(path.join(__dirname, '../src/dll/index.js'))
    }
  },

  plugins: [
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require(path.resolve(path.join(__dirname, '../dist/dll/core-manifest.json'))),
      sourceType: 'umd'
    })
  ]
});
