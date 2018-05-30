import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return <div id="zone">App</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
