var webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})
      
module.exports = {
  entry: [
    './app',
    'react-hot-loader/patch'
  ],
  output:{
    path: __dirname ,
    filename: 'index-bundle.js',
    publicPath: '/'
  },
  module:{
    loaders:[
      {test:/\.js$/, exclude: /node-modules/, loader: "babel-loader"},
      {test:/\.css$/, include: /css/, loader: ExtractTextPlugin.extract({
        use: "css-loader"
      }) }
    ]
  },
  devServer: {
    hot: true
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin,
    new ExtractTextPlugin({
      filename: "style.css",
      allChunks: true
    })
  ]
}
