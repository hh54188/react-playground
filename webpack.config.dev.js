const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.config.common.js");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const PUBLIC_DIR_PATH = path.join(__dirname, "public");

module.exports = merge(common, {
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "public/dist")
  },
  // output: {
  //   filename: "[name].[contenthash].bundle.js",
  //   chunkFilename: "[name].[contenthash].bundle.js",
  //   path: path.join(__dirname, "public/dist"),
  //   publicPath: "/"
  // },
  // mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: PUBLIC_DIR_PATH,
    historyApiFallback: true,
    hot: true,
    overlay: {
      error: true
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public/index-template.html")
    }),
    new webpack.NamedModulesPlugin(),
    // HotModuleReplacement 会与 chunkHash 以及 contentHash 冲突
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ],
  watch: true
});
