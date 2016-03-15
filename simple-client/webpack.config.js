/* eslint-disable */

var path = require("path");
var webpack = require("webpack");

module.exports =
{
  entry: {
    "main":"./index.js"
  },
  target:'web',
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/",
  },
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
