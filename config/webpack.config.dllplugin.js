const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');
const commonConfig = require('./webpack.config.common.js');

module.exports = webpackMerge(commonConfig, {
  output: {
    filename: 'dll/[name].dllplugin.js'
  },

  entry: {
    'main':      ['./src/dll/index']
  },

  plugins: [
    new webpack.DllPlugin({
      name: 'mydll',
      context: '.',
      path: path.resolve(path.join(__dirname, '../dist/dll/core-manifest.json'))
    })
  ]
});
