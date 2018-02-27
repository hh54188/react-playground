import React from "react";
import ReactDOM from "react-dom";

class CustomPureComponent extends React.PureComponent {
  // class CustomPureComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: {}
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.setState({
      count: {}
    });
  }
  render() {
    console.log("RENDER", this.state);
    return (
      <div>
        <h1>Hello World</h1>
        <button onClick={this.clickHandler}>click</button>
      </div>
    );
  }
}

ReactDOM.render(<CustomPureComponent />, document.querySelector("#app"));
