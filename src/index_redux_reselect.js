import React from "react";
import ReactDOM from "react-dom";
import { createSelector } from "reselect";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";

// ===== Selector =====

const fullNameSelector = state => state.name.firstName + state.name.lastName;
const fullNameLengthSelector = createSelector(
  fullNameSelector,
  fullName => fullName.length
);

// ===== END =====

function name(
  initalState = {
    firstName: "Jim",
    lastName: "Carrey",
    age: 58
  },
  action
) {
  switch (action.type) {
    case "add":
      return {
        ...initalState,
        age: initalState.age + 1
      };
    default:
      return initalState;
  }
}

const store = createStore(
  combineReducers({
    name
  })
);

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { add } = this.props;
    return (
      <div>
        <h1 onClick={add}>
          {this.props.fullName} {this.props.age}
        </h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("re-computed");
  const {
    name: { firstName, lastName, age }
  } = state;
  return {
    fullName: firstName + lastName,
    age
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
