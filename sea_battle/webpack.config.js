var path = require('path');

module.exports = {
  entry: "./script.js",
  output: {
    path: path.resolve(__dirname, "dist"), // string
    filename: "output.js"
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
};