import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";

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

function mapStateToProps(state) {
  return {
    count: state.counter.count
  };
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

const ComponentB = ({ count }) => {
  return <h1>{count}</h1>;
};

const WrappedComponentB = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentB);

const ComponentC = ({ count, add }) => {
  return <h1 onClick={add}>{count}</h1>;
};

const WrappedComponentC = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentC);

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <WrappedComponentB />
        <WrappedComponentC />
      </div>
    );
  }
}

const WrappedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

ReactDOM.render(
  <Provider store={store}>
    <WrappedApp />
  </Provider>,
  document.querySelector("#app")
);
