import React from "react";
import ReactDOM from "react-dom";

const List = ({ users, updateHandler }) => {
  return (
    <ul>
      {users.map(user => {
        const { id, name } = user;
        return (
          <li key={id} onClick={updateHandler.bind(this, id)}>
            {name}
          </li>
        );
      })}
    </ul>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          name: "liguangyi"
        },
        {
          id: 2,
          name: "mengxiao"
        },
        {
          id: 3,
          name: "suna"
        },
        {
          id: 4,
          name: "yuzhou"
        }
      ]
    };
  }
  updateNameById = id => {
    const { users } = this.state;
    users.find(item => item.id == id).name = Math.random();
    this.setState({
      users
    });
  };
  render() {
    const { users } = this.state;
    return (
      <div>
        <List users={users} updateHandler={this.updateNameById} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
