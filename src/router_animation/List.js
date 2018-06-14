import React from "react";

import AnimationWrapper from "./AnimationWrapper";

export default class List extends React.Component {
  render() {
    return (
      <AnimationWrapper {...this.props}>
        <div>List</div>
      </AnimationWrapper>
    );
  }
}
