import React from "react";
import { Switch, Route, withRouter, Link } from "react-router-dom";

import Detail from "./Detail";
import Form from "./Form";
import List from "./List";

// @withRouter
export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/list">list</Link>
        </h1>
        <h1>
          <Link to="/detail">detail</Link>
        </h1>
        <h1>
          <Link to="/form">form</Link>
        </h1>
        <Switch>
          <Route path="/list" component={List} />
          <Route path="/detail" component={Detail} />
          <Route path="/form" component={Form} />
        </Switch>
      </div>
    );
  }
}
