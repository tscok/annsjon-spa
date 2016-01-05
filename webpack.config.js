var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './assets/js/main.js',
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            riot: 'riot'
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: false
        })
    ],
    module: {
        preLoaders: [
            { test: /\.tag$/, exclude: /node_modules/, loader: 'riotjs-loader', query: { type: 'babel' } }
        ],
        loaders: [
            { test: /\.js$|\.tag$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.md$/, loader: 'html!markdown?breaks=true'},
            { test: /\.less$/, loader: 'style!css!less' },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.tag', '.md', '.less']
    }
};
