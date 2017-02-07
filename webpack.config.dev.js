const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
// __dirname refers to the directory where this webpack.config.js lives, which in this case is the project root.
module.exports = {
  entry: [
    path.resolve(__dirname, './src/index'),
     'webpack/hot/dev-server',
    'webpack-hot-middleware/client'
    ],
   target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
        {test: /\.css$/, loaders: ['style-loader','css-loader']},
        {test: /\.scss$/, loaders: ['style-loader','css-loader', 'sass-loader']},
        {test: /\.(png|jpg)$/, loaders: ['url-loader']},
        {test:/\.html$/, loaders: ['html-loader']}
    ]
  },
  plugins: [
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
