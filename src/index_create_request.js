import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import * as _ from "lodash";
import { Modal } from "antd";
import "antd/dist/antd.css";

import "./index.less";

function withRequestLoadingModal(requestName) {
  return function(ComposedComponent) {
    return class extends React.Component {
      constructor(props) {
        super(props);
      }
      render() {
        let requestNames = _.isArray(requestName) ? requestName : [requestName];
        const someRequestsStillLoading = requestNames.some(name => {
          const tempStatus = this.props[`${name}Status`];
          const { isLoading } = tempStatus;
          if (isLoading) {
            return true;
          }
          return false;
        });
        return (
          <div>
            <Modal
              visible={!someRequestsStillLoading}
              title="Title"
              footer={null}
            >
              <p>Some contents...</p>
            </Modal>
            <ComposedComponent {...this.props} />;
          </div>
        );
      }
    };
  };
}

function withAxiosRequest(requestName, requestConfig) {
  return function(ComposedComponent) {
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          isLoading: false,
          data: [],
          error: "",
          response: ""
        };
        this.request = this.request.bind(this);
        this.setLoadingState = this.setLoadingState.bind(this);
        this.setSuccessState = this.setSuccessState.bind(this);
        this.setFailureState = this.setFailureState.bind(this);
      }
      setLoadingState() {
        this.setState({
          isLoading: false,
          data: [],
          error: "",
          response: ""
        });
      }
      setSuccessState(response) {
        this.setState({
          isLoading: false,
          data: response.data,
          error: "",
          response
        });
      }
      setFailureState(error) {
        this.setState({
          isLoading: false,
          data: [],
          error: error,
          response: error
        });
      }
      request() {
        this.setLoadingState();
        return axios(requestConfig)
          .then(response => {
            this.setSuccessState(response);
            return Promise.resolve(response);
          })
          .catch(error => {
            this.setFailureState(error);
            return Promise.reject(error);
          });
      }
      render() {
        const injectProps = {
          [requestName]: this.request,
          [`${requestName}Status`]: this.state
        };
        return <ComposedComponent {...this.props} {...injectProps} />;
      }
    };
  };
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    const { getUser } = this.props;
    const requestPromise = getUser();
    requestPromise
      .then(response => {
        console.log("SUCCESS", response);
      })
      .catch(error => {
        console.log("FAILURE", error);
      });
  }
  render() {
    return (
      <span>
        <button onClick={this.clickHandler}>Request</button>
      </span>
    );
  }
}

const AppWithRequest = withAxiosRequest("getUser", {
  method: "get",
  url: "https://randomuser.me/api/"
})(withRequestLoadingModal("getUser")(App));

ReactDOM.render(<AppWithRequest />, document.querySelector("#app"));
