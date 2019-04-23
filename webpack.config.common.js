const path = require("path");

module.exports = {
  entry: {
    app: "./src/index_redux_connect_order.js"
    // app: "./src/index_remove_deadcode.js"
    // app: "./src/index_same_store_test.js"
    // app: "./src/index_dynamic_import.js"
    // app: "./src/index_mobx_react_performance.js"
    // app: "./src/index_redux_oversub.js"
    // app: "./src/index_stopwatch_redux_container.js"
    // app: "./src/index_stopwatch_redux.js"
    // app: "./src/index_stopwatch_mobx.js"
    // app: "./src/index_list_id.js"
    // app: "./src/index_mobx_performance.js"
    // app: "./src/index_antd_style.js"
    // app: "./src/index_redux_reselect.js"
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
  module: {
    rules: [
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
