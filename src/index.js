import React from "react";
import ReactDOM from "react-dom";
import { Map } from "immutable";

class ParentComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: Math.random()
    }
  }
  clickHandler = () => {
    this.setState({
      value: Math.random()
    }, () => {
      this.setState({
        value: Math.random(),
      }, () => {
        this.setState({
          value: Math.random()
        })
      })
    })
  }
  render() {
    return <div onClick={this.clickHandler}><ChildComponent value={this.state.value} /></div>
  }
}

class ChildComponent extends React.Component {
  componentDidUpdate() {
    console.log('Parent ComponentDidUpdate')
  }
  render() {
    return <div>Child Component: {this.props.value}</div>
  }
}

function App() {
  return <div><ParentComponent ></ParentComponent></div>;
}

ReactDOM.render(<App />, document.querySelector("#app"));
