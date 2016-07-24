/*eslint-env node */
const webpack = require('webpack')

module.exports = {
  entry: ["./src/js/main.js"],
  output: {
    filename: "./dist/bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
  // devtool: "#inline-source-map"
}
