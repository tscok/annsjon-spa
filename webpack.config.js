const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './assets/js/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.tag?$/,
                exclude: /node_modules/,
                enforce: 'pre',
                use: 'riotjs-loader'
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.md?$/,
                use: [
                    'html-loader',
                    { loader: 'markdown-loader', options: { breaks: true } },
                ],
            },
            {
                test: /\.less?$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(jpg|jpeg|png|svg)?$/i,
                use: 'file-loader',
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            riot: 'riot'
        }),
    ],
    resolve: {
        modules: [
            path.resolve(__dirname, './'),
            path.resolve(__dirname, 'assets'),
            'node_modules',
        ],
        extensions: ['.js', '.tag', '.md', '.less'],
    },
};

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');


/*
module.exports = {
    entry: './assets/js/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.tag?$/,
                exclude: /node_modules/,
                enforce: 'pre',
                use: 'riotjs-loader'
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.md?$/,
                use: [
                    'html-loader',
                    { loader: 'markdown-loader', options: { breaks: true } }
                ]
            },
            {
                test: /\.less?$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(jpg|jpeg|png|svg)?$/i,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            riot: 'riot'
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: false
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
        modules: [
            path.resolve(__dirname, './'),
            path.resolve(__dirname, 'assets'),
            'node_modules'
        ]
    },
    devServer: {
        compress: true,
        historyApiFallback: true,
        host: '0.0.0.0',
        hot: false,
        inline: true,
        publicPath: '/build/'
    },
    resolve: {
        extensions: ['.js', '.tag', '.md', '.less']
    }
};
*/