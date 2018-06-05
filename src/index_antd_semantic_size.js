import React from "react";
import ReactDOM from "react-dom";

import "antd/dist/antd.min.css";
import { Button } from "antd";

import "semantic-ui-css/semantic.min.css";
import {
  Button as SemanticButton,
  Segment as SemanticSegment,
  Card as SemanticCard
} from "semantic-ui-react";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <Button>Click</Button>
        <SemanticButton>Click</SemanticButton>
        <SemanticSegment>SemanticSegment</SemanticSegment>
        <SemanticCard />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
