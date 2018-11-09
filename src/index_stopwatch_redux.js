import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";
import { connect, Provider } from "react-redux";

const UPDATE_ACTION = "UPDATE_ACTION";

const createUpdateAction = () => ({
  type: UPDATE_ACTION
});

const stopWatch = function(
  initialState = {
    currentTimestamp: 0
  },
  action
) {
  switch (action.type) {
    case UPDATE_ACTION:
      initialState.currentTimestamp = Date.now();
      return Object.assign({}, initialState);
    default:
      return initialState;
  }
};

const store = createStore(
  combineReducers({
    stopWatch
  })
);

class App extends React.Component {
  constructor(props) {
    super(props);
    const { update } = this.props;
    setInterval(update);
  }
  render() {
    const { currentTimestamp } = this.props;
    return <div>{currentTimestamp}</div>;
  }
}

const WrappedApp = connect(
  function mapStateToProps(state, props) {
    const {
      stopWatch: { currentTimestamp }
    } = state;
    return {
      currentTimestamp
    };
  },
  function(dispatch) {
    return {
      update: () => {
        dispatch(createUpdateAction());
      }
    };
  }
)(App);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <WrappedApp />
      <WrappedApp />
      <WrappedApp />
      <WrappedApp />
      <WrappedApp />
      <WrappedApp />
      <WrappedApp />
      <WrappedApp />
      <WrappedApp />
      <WrappedApp />
      <WrappedApp />
      <WrappedApp />
      <WrappedApp />
      <WrappedApp />
      <WrappedApp />
      <WrappedApp />
      <WrappedApp />
      <WrappedApp />
      <WrappedApp />
      <WrappedApp />
    </div>
  </Provider>,
  document.querySelector("#app")
);
