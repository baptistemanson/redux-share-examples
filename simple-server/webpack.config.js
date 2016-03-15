/* eslint-disable */
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });


var path = require("path");
var webpack = require("webpack");

module.exports =
{
  entry: {
    "main":"./index.js"
  },
  target:'node',
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/",
  },
  externals:nodeModules,  
  plugins: [
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }
    ]
  }
}
