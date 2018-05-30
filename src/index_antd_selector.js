import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-refetch";

import { Select } from "antd";
import "antd/dist/antd.css";

const { Option } = Select;

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { usersFetch } = this.props;
    if (usersFetch.pending) {
      return <div>loading</div>;
    }
    const results = usersFetch.value.results;
    return (
      <Select style={{ width: "100%" }} mode="multiple">
        {results.map((user, index) => {
          const { email } = user;
          const value = `${email}-${index}`;
          return (
            <Option value={value} key={index}>
              {value}
            </Option>
          );
        })}
      </Select>
    );
  }
}

const WrappedApp = connect(() => {
  return {
    usersFetch: "https://randomuser.me/api/?results=1000"
  };
})(App);

ReactDOM.render(<WrappedApp />, document.querySelector("#app"));
