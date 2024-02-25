const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './annsjon-spa.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|svg)?$/i,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot',
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
}
