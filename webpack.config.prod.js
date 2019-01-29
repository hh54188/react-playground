const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.config.common.js");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].bundle.js",
    chunkFilename: "[name].[contenthash].bundle.js",
    path: path.join(__dirname, "public/dist"),
    publicPath: "/"
  },
  devtool: false,
  plugins: [
    new CleanWebpackPlugin([
      "public/dist/**/*.js",
      "public/dist/**/*.map",
      "public/dist/**/*.svg",
      "public/dist/**/*.eot",
      "public/dist/**/*.ttf",
      "public/dist/**/*.html"
    ]),
    new UglifyJSPlugin({ sourceMap: false }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public/index-template.html")
    })
  ]
});
