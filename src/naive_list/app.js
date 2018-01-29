import { connect } from "react-redux";
import React, { Component, PureComponent } from "react";

class Item extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }
  shouldComponentUpdate(nextProps) {
    if (this.props["marked"] === nextProps["marked"]) {
      return false;
    }
    return true;
  }
  onClick() {
    this.props.onClick(this.props.id);
  }

  render() {
    console.log("Item Render");
    const { id, marked } = this.props;
    const bgColor = marked ? "yellow" : "#fff";
    return (
      <div
        style={{
          padding: "20px",
          border: "1px solid",
          fontSize: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: bgColor,
          height: "20px"
        }}
        onClick={this.onClick}
      >
        {id}
      </div>
    );
  }
}

class App extends Component {
  render() {
    console.log("App Render");
    const { items, markItem } = this.props;
    return (
      <div className="main" style={{ overflow: "scroll", height: "600px" }}>
        {items.map(item => (
          <Item
            key={item.id}
            id={item.id}
            marked={item.marked}
            onClick={markItem}
          />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

const markItem = id => ({ type: "MARK", id });

export default connect(mapStateToProps, { markItem })(App);
