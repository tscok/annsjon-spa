// const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const baseConfig = require('./webpack.config.js');


module.exports = function() {
    return webpackMerge(baseConfig, {
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
        ],
        devServer: {
            compress: true,
            // contentBase: path.join(__dirname, 'assets'),
            historyApiFallback: true,
            host: '0.0.0.0',
            hot: true,
            inline: true,
            publicPath: '/build/',
        },
    });
};