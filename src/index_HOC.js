import React from "react";
import ReactDOM from "react-dom";

function withPower(powerType) {
  return function(ComposedComponent) {
    return class extends React.Component {
      constructor(props) {
        super(props);
      }
      render() {
        return <ComposedComponent {...this.props} power={powerType} />;
      }
    };
  };
}

function withGraphicCard(graphicCardType) {
  return function(ComposedComponent) {
    return class extends React.Component {
      constructor(props) {
        super(props);
      }
      render() {
        return (
          <ComposedComponent {...this.props} graphicCard={graphicCardType} />
        );
      }
    };
  };
}

function withCPU(cpuType) {
  return function(ComposedComponent) {
    return class extends React.Component {
      constructor(props) {
        super(props);
      }
      render() {
        return <ComposedComponent {...this.props} cpu={cpuType} />;
      }
    };
  };
}

function PC(props) {
  const { graphicCard, cpu, power } = props;
  return (
    <p>
      graphicCard: {graphicCard}, cpu: {cpu}, power: {power}
    </p>
  );
}

const NewPC = withPower("650w")(
  withCPU("1800x")(withGraphicCard("1080ti")(PC))
);

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <NewPC />;
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
