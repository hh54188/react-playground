import React from "react";
import ReactDOM from "react-dom";
import { observable, action } from "mobx";
import { observer, inject, Provider } from "mobx-react";

class Team {
  @observable
  list = [{
    name: 'zhangsan'
  }, {
    name: 'lisi'
  }, {
    name: 'wangwu'
  }, {
    name: 'zhaoliu'
  }];

  @action
  updateSomeonesName = () => {
    this.list[0].name = Math.random()
  };
}

const team = new Team();

class Person extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log('Person Render')
    const {name} = this.props
    return <li>{name}</li>
  }
}

@inject("store")
@observer
class App extends React.Component {
  constructor(props) {
    super(props);
    setInterval(this.props.store.updateSomeonesName, 1000 * 1)
  }
  render() {
    console.log('App Render')
    const list = this.props.store.list
    return <ul>
      {list.map(({name}) => {
        return <Person key={name} name={name}></Person>
        // return <li value={name} key={name}>{name}</li>
      })}
    </ul>
  }
}

ReactDOM.render(
  <Provider store={team}>
    <div>
      <App />
    </div>
  </Provider>,
  document.querySelector("#app")
);
