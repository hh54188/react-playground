import React from "react";

let counter = 0;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ImportedComponent: null
    };
  }
  loadModule = () => {
    counter++;
    if (counter % 2 === 0) {
      import(/* webpackChunkName: "other" */ "./other").then(module => {
        const ImportedComponent = module.default;
        this.setState({
          ImportedComponent
        });
      });
    } else {
      import(/* webpackChunkName: "another" */ "./another").then(module => {
        const ImportedComponent = module.default;
        this.setState({
          ImportedComponent
        });
      });
    }
  };
  render() {
    const { ImportedComponent } = this.state;
    return (
      <div>
        <button onClick={this.loadModule}>Click</button>
        {ImportedComponent && <ImportedComponent />}
      </div>
    );
  }
}
