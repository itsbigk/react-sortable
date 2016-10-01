var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./lib/index.js",
  output: {
        path: __dirname + '/browser',
        filename: "react-sortable.js",
        libraryTarget: 'var',
        library: 'Sortable'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader'
      }
    ]
  }
};
