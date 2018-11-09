import React from "react";
import ReactDOM from "react-dom";

import "antd/dist/antd.less";
import { Button } from "antd";

function App() {
  return (
    <div>
      <Button>button</Button>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
