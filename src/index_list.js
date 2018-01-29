import React from "react";
import ReactDOM from "react-dom";
// 无优化的列表1:
// Mount 阶段：App 渲染一次，Item 渲染 10000 次
// 每次点击列表， App 渲染一次，Item 渲染 10000 次
import NaiveList from "./naive_list";
// 优化列表2：
// 优化手段：item dict 和 id list 的组合，item 有单独的 reducer
// Mount 阶段：App 渲染一次，Item 渲染 10000 次
// 每次点击列表， 只有被点击的 Item 才会被渲染
import NaiveList2 from "./naive_list_2";
// 优化列表3：
// 优化手段：基于上面的优化，但是 item 的 reducer 返回的是函数
// Mount 阶段：App 渲染一次，Item 渲染 10000 次
// 每次点击列表， 只有被点击的 Item 才会被渲染
import NaiveList3 from "./naive_list_3";
import NaiveList4 from "./naive_list_4";
import NaiveList5 from "./naive_list_5";

ReactDOM.render(<NaiveList />, document.querySelector("#app"));
