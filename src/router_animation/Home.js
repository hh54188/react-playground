import React from "react";
import { Spring, Transition, animated, config } from "react-spring";
import { connect as refetchConnect } from "react-refetch";

const AnimationWrapper = ({ children }) => {
  return (
    <Transition
      from={{ opacity: 0, height: 0 }}
      enter={{ opacity: 1, height: 20 }}
      leave={{ opacity: 0, height: 0 }}
    >
      {style => <div style={style}>{children}</div>}
    </Transition>
  );
};

const Loading = () => {
  console.log("Render Loading");
  return <div>Loading</div>;
};

const Content = () => {
  console.log("Render Content");
  return <div>Content</div>;
};

@refetchConnect(props => {
  return {
    usersFetch: "https://randomuser.me/api/?results=10"
  };
})
export default class Home extends React.Component {
  state = {
    loading: true
  };
  componentDidMount() {
    console.log("componentDidMount");
    document.querySelector("body").onclick = () => {
      this.setState({
        loading: false
      });
    };
  }
  render() {
    console.log("Render Home", this.props.usersFetch.pending);
    if (this.props.usersFetch.pending) {
      return <Loading />;
    }

    return <Content />;
  }
}
