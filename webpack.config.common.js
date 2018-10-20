const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const PUBLIC_DIR_PATH = path.join(__dirname, "public");

module.exports = {
  entry: {
    app: "./src/index_redux_reselect.js"
    // app: "./src/index_apollo.js"
    // app: "./src/router_animation/index.js"
    // app: "./src/index_antd_semantic_size.js"
    // app: "./src/index_object_change.js"
    // app: "./src/index_interact.js"
    // app: "./src/index_antd_selector.js"
    // app: "./src/index.js"
    // app: "./src/index_redux.js"
    // app: "./src/index_pure.js"
    // app: "./src/index_dnd.js"
    // app: "./src/index_dnd_demo.js"
    // app: "./src/index_highcharts.js"
    // app: "./src/index_create_request.js"
    // app: "./src/index_counter.js"
    // app: "./src/index_list.js"
  },
  resolve: {
    alias: {
      "antd-color": path.join(
        __dirname,
        "node_modules/antd/lib/style/color/colors.less"
      )
    }
  },
  output: {
    filename: "[name].bundle.js",
    path: PUBLIC_DIR_PATH,
    // publicPath 非常重要，决定了页面引用的资源相对于的路径是什么
    // 默认相对于页面路径加载
    // https://webpack.js.org/configuration/output/#output-publicpath
    publicPath: "/"
  },
  plugins: [new CleanWebpackPlugin(["public/**/*.js", "public/**/*.map"])],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.less$/,
        // 因为需要引入 /node_modules/antd 中的 .less 变量，
        // 所以不能排除 /node_modules/ 文件夹
        // exclude: /node_modules/,
        loaders: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      }
    ]
  }
};
