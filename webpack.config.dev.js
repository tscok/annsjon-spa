const webpack = require('webpack')
const webpackMerge = require('webpack-merge')

const baseConfig = require('./webpack.config.js')

module.exports = function() {
  return webpackMerge(baseConfig, {
    output: {
      publicPath: '/build/',
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
      compress: true,
      historyApiFallback: true,
      host: '0.0.0.0',
      hot: true,
      inline: true,
      publicPath: '/build/',
    },
  })
}
