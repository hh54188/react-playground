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

const StopWatch = ({ currentTimestamp }) => {
  return <div>{currentTimestamp}</div>;
};

class Container extends React.Component {
  constructor(props) {
    super(props);
    const { update } = this.props;
    setInterval(update);
  }
  render() {
    const { currentTimestamp } = this.props;
    return (
      <div>
        <StopWatch currentTimestamp={currentTimestamp} />
        <StopWatch currentTimestamp={currentTimestamp} />
        <StopWatch currentTimestamp={currentTimestamp} />
        <StopWatch currentTimestamp={currentTimestamp} />
        <StopWatch currentTimestamp={currentTimestamp} />

        <StopWatch currentTimestamp={currentTimestamp} />
        <StopWatch currentTimestamp={currentTimestamp} />
        <StopWatch currentTimestamp={currentTimestamp} />
        <StopWatch currentTimestamp={currentTimestamp} />
        <StopWatch currentTimestamp={currentTimestamp} />

        <StopWatch currentTimestamp={currentTimestamp} />
        <StopWatch currentTimestamp={currentTimestamp} />
        <StopWatch currentTimestamp={currentTimestamp} />
        <StopWatch currentTimestamp={currentTimestamp} />
        <StopWatch currentTimestamp={currentTimestamp} />

        <StopWatch currentTimestamp={currentTimestamp} />
        <StopWatch currentTimestamp={currentTimestamp} />
        <StopWatch currentTimestamp={currentTimestamp} />
        <StopWatch currentTimestamp={currentTimestamp} />
        <StopWatch currentTimestamp={currentTimestamp} />
      </div>
    );
  }
}

const WrappedContainer = connect(
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
)(Container);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <WrappedContainer />
    </div>
  </Provider>,
  document.querySelector("#app")
);
