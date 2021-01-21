const webpack = require("webpack");
const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const babelRule = {
  test: /\.js/i,
  exclude: path.resolve(__dirname,'node_modules'),
  use:{
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env', '@babel/preset-react']
    }
  }
}

const cssRule = {
  test: /\.css/i,
  use: ['style-loader', 'css-loader']
}

const fileRule = {
  test: /\.(png|jpe?g|gif|svg)/i,
  use: 'file-loader'
}


module.exports = {
  entry: [
    './src/index.js',
    '@babel/polyfill'
  ],
  output: {
    path: `${__dirname}/public`,
    filename: 'index.js'
  },
  watch: true,
  devServer: {
    open: true,
    hot: true
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({template: './src/index.html'})
  ],
  module: {
    rules: [
      babelRule,
      cssRule,
      fileRule
    ]
  }
}