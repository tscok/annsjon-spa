const webpack = require('webpack')
const webpackMerge = require('webpack-merge')

const baseConfig = require('./webpack.config.js')

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = function() {
  return webpackMerge(baseConfig, {
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new UglifyJsPlugin(),
    ],
  })
}
