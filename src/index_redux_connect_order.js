import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";

const INITIAL_STATE = {
  count:0
}

 const reducer = function(state = INITIAL_STATE, action){
  switch(action.type) {
    case "IncreaseCounter":
      return Object.assign({}, state, { count: state.count + 1});
    case "DecreaseCounter":
      return Object.assign({}, state, { count: state.count - 1});
    
    default:
      return state;
  }
}

const store = createStore(reducer);

const mapStateToProps = function(state){
  return state;
}

const mapDispatchToProps = function(dispatch){
  return{
    Increase: function(){ return dispatch({type: "IncreaseCounter"})},
    Decrease: function(){ return dispatch({type: "DecreaseCounter"})}
  }
}

function ChildComponent({ count }) {
  console.log('RENDER CHILDCOMPONENT');
  return <strong>{count}</strong>
}

const ConnectedChildComponent = connect(mapStateToProps, mapDispatchToProps)(ChildComponent);

class AnotherCounter extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log('RENDER ANOTHER COUNTER')
    return (
      <div>{this.props.count}</div>
    )
  }
}

class Counter extends React.Component{
  constructor(props){
    super(props);
  }
  
  IncreaseHandler(){
    this.props.Increase();
  }
  
  DecreaseHandler(){
    this.props.Decrease();
  }
  
  render() {
    console.log('RENDER COUNTER')
    return(
      <div>
        <div className="box-count"><h2>{this.props.count}</h2></div>
        <ConnectedChildComponent />
        <div className="box-buttons">
          <button onClick={this.IncreaseHandler.bind(this)}>Increase</button>
          <button onClick={this.DecreaseHandler.bind(this)}>Decrease</button>
        </div>
      </div>
    )
  }
}

const ConnectedAnotherCounter = connect(mapStateToProps, mapDispatchToProps)(AnotherCounter);
const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <ConnectedCounter />
      <ConnectedAnotherCounter />      
    </div>
  </Provider>,
  document.getElementById("app")
)