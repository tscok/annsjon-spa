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
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
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
