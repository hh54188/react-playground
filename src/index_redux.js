import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";

const constCounter = {
  count: 0
};

const constObj = {
  counter: constCounter
};

function counter(initalState = { count: 0 }, action) {
  switch (action.type) {
    case "add":
      return Object.assign({}, { count: initalState.count + 1 });
    default:
      return initalState;
  }
}

const store = createStore(
  combineReducers({
    counter
  })
);

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("RENDER");
    return (
      <div>
        <h1>{this.props.counter.count}</h1>
        <button onClick={this.props.add}>add</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
  // return {
  //   counter: constCounter
  // };
  // return constObj;
}

function mapDispatchToProps(dispatch) {
  return {
    add: function() {
      dispatch({
        type: "add"
      });
    }
  };
}

const WrappedApp = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <WrappedApp />
  </Provider>,
  document.querySelector("#app")
);
