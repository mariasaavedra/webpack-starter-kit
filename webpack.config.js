const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
// __dirname refers to the directory where this webpack.config.js lives, which in this case is the project root.
module.exports = {
  entry: path.resolve(__dirname, './src/index'),
  output: {
    path: path.resolve(__dirname, './src'),
    publicPath: './',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
        {test: /\.css$/, loaders: ['style','css']}
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};
module.exports = config;