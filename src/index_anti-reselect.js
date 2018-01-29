import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const appReducer = (state, action) => {
  switch
}

const store = createStore(combineReducers({ items: itemsReducer }));

ReactDOM.render(<Counter val={5} />, document.querySelector("#app"));
