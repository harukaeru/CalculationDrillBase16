console.log('foo')
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.bundle.js'
  },
  module: {
   rules: [{
     test: /\.js$/,
     loader: 'babel-loader',
     query: {
       presets: ['env', 'react']
     }
   }]
  },
  stats: {
    colors: true
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    https: false,
  },
  devtool: 'source-map'
}
