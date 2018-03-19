import React from "react";
import ReactDOM from "react-dom";
import { Map } from "immutable";

function App() {
  const person = Map();
  const personWithAge = person.set("age", 12);
  console.log(person.toJS());
  console.log(personWithAge.toJS());
  return <div>App</div>;
}

ReactDOM.render(<App />, document.querySelector("#app"));
