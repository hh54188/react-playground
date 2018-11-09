import React from "react";
import ReactDOM from "react-dom";
import { observable, transaction, autorun } from "mobx";

import "antd/dist/antd.less";
import { Button } from "antd";

class Runner {
  @observable
  list = [];
  run() {
    const start = new Date().getTime();
    transaction(() => {
      for (let i = 0; i < 200; i++) {
        this.list.push({
          id: observable(i),
          one: observable("1"),
          two: "2",
          three: 3,
          x: "xxxxx",
          y: "yyyyy",
          z: "zzzzz",
          z1: "zzzzz",
          z2: "zzzzz",
          z3: "zzzzz",
          z4: "zzzzz"
        });
      }
    });
    console.log(
      "Execution time: " + (new Date().getTime() - start) + "ms services "
    );
  }
}

const runner = new Runner();
autorun(() => console.log(runner.list));
runner.run();

function App() {
  return (
    <div>
      <Button onClick={() => {}}>button</Button>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
