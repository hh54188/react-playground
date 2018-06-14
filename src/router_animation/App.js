import React from "react";
import { Switch, Route, withRouter, Link } from "react-router-dom";
import { Spring, Transition, animated, config } from "react-spring";

import Detail from "./Detail";
import Form from "./Form";
import List from "./List";
import Home from "./Home";

@withRouter
export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Home</Link>
        </h1>
        <h1>
          <Link to="/list">list</Link>
        </h1>
        <h1>
          <Link to="/detail">detail</Link>
        </h1>
        <h1>
          <Link to="/form">form</Link>
        </h1>
        <Transition
          config={config.slow}
          keys={location.pathname}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {style => {
            return (
              <Switch location={this.props.location}>
                <Route
                  exact
                  path="/"
                  render={props => <Home {...props} style={style} />}
                />
                <Route
                  path="/list"
                  render={props => <List {...props} style={style} />}
                />
                <Route
                  path="/detail"
                  render={props => <Detail {...props} style={style} />}
                />
                <Route
                  path="/form"
                  render={props => <Form {...props} style={style} />}
                />
                {/* <Route path="/list"  component={List} />
                <Route path="/detail" component={Detail} />
                <Route path="/form" component={Form} /> */}
              </Switch>
            );
          }}
        </Transition>
      </div>
    );
  }
}
