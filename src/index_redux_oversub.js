import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";

function person(
  initalState = { firstName: "firstName", lastName: "lastName" },
  action
) {
  switch (action.type) {
    case "update":
      return {
        ...initalState,
        firstName: Math.random()
      };
    default:
      return initalState;
  }
}

const store = createStore(
  combineReducers({
    person
  })
);

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("re-render");
    const { lastName } = this.props;
    return (
      <div>
        <h1>{lastName}</h1>
        <button onClick={this.props.update}>add</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    person: { lastName }
  } = state;
  return {
    lastName
  };
}

function mapDispatchToProps(dispatch) {
  return {
    update: function() {
      dispatch({
        type: "update"
      });
    }
  };
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
