import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: props.val };
    this.submitHandler = this.submitHandler.bind(this);
  }
  submitHandler() {
    console.log(this.refs.target.value);
  }
  render() {
    var x = this;
    var { counter } = this.state;
    setTimeout(function() {
      if (counter > 0) {
        x.setState({ counter: counter - 1 });
      }
    }, 1000);
    return (
      <div>
        <button onClick={this.submitHandler}>submit</button>
        <input ref="target" type="text" />
        counting started at {this.props.val}, currently at: {counter}
      </div>
    );
  }
}

class CountDown extends React.Component {
  constructor(props) {
    super(props);
    const { target } = this.props;
    this.state = {
      target
    };
  }
  componentDidMount() {
    const { target } = this.state;
    if (target) {
      setTimeout(() => {
        this.setState({
          target: target - 1
        });
      }, 1000);
    }
  }
  render() {
    const { target } = this.state;
    return <span>{target}</span>;
  }
}

class CountDown2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingSeconds: this.props.target,
      timer: null
    };
  }
  componentDidUpdate() {
    const { timer, remainingSeconds } = this.state;
    if (remainingSeconds <= 0) {
      window.clearInterval(timer);
    }
  }
  componentDidMount() {
    const timer = window.setInterval(() => {
      const { remainingSeconds } = this.state;
      this.setState({
        remainingSeconds: remainingSeconds - 1
      });
    }, 1000);
    this.setState({
      timer
    });
  }
  render() {
    const { remainingSeconds } = this.state;
    return <span>{remainingSeconds}</span>;
  }
}

ReactDOM.render(<Counter val={5} />, document.querySelector("#app"));
