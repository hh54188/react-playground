import React from "react";
import ReactDOM from "react-dom";
import { Hello1 } from "./modules";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    Hello1();
    return <div>Hello World</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
