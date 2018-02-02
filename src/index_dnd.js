import React from "react";
import ReactDOM from "react-dom";
import HTML5Backend from "react-dnd-html5-backend";

import DraggableCard from "./dnd/DraggableCard";

import { DragDropContext } from "react-dnd";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <DraggableCard />
      </div>
    );
  }
}

const DDApp = DragDropContext(HTML5Backend)(App);

ReactDOM.render(<DDApp />, document.querySelector("#app"));
