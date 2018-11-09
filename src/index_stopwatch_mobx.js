import React from "react";
import ReactDOM from "react-dom";
import { observable, action } from "mobx";
import { observer, inject, Provider } from "mobx-react";

class StopWatch {
  @observable
  currentTimestamp = 0;

  @action
  updateCurrentTimestamp = value => {
    this.currentTimestamp = value;
  };
}

const stopWatch = new StopWatch();

@inject("store")
@observer
class App extends React.Component {
  constructor(props) {
    super(props);
    const stopWatch = this.props.store;
    setInterval(() => stopWatch.updateCurrentTimestamp(Date.now()));
  }
  render() {
    const stopWatch = this.props.store;
    return <div>{stopWatch.currentTimestamp}</div>;
  }
}

ReactDOM.render(
  <Provider store={stopWatch}>
    <div>
      <App />
      <App />
      <App />
      <App />
      <App />
      <App />
      <App />
      <App />
      <App />
      <App />
      <App />
      <App />
      <App />
      <App />
      <App />
      <App />
      <App />
      <App />
      <App />
      <App />
    </div>
  </Provider>,
  document.querySelector("#app")
);
