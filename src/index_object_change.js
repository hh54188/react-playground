import React from "react";
import ReactDOM from "react-dom";

class PersonView extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { person } = this.props;
    return <div>{person.name}</div>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: "hahaha"
      }
    };
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <button
          onClick={() => {
            const { person } = this.state;
            person.name = Math.random();
            this.setState({
              // Work Both in Component and PureComponent
              person: {
                name: Math.random()
              }
              // Work Only in Component:
              // person
            });
          }}
        >
          Click
        </button>
        <PersonView person={this.state.person} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
