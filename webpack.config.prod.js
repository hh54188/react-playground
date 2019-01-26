const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.config.common.js");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "public/dist")
  },
  devtool: false,
  plugins: [
    new UglifyJSPlugin({ sourceMap: false }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public/index-template.html")
    }),
  ]
});
