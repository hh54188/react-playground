import React from "react";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  clickHandler = () => {
    const token = "eaaf1bb18ee1c3806127aa10e32f1c56af6017fb ";
    const GET_ORGANIZATION = `
    {
      organization(login: "the-road-to-learn-react") {
        name
        url
      }
    }
  `;

    const axiosGitHubGraphQL = axios.create({
      baseURL: "https://api.github.com/graphql",
      headers: {
        Authorization: `bearer ${token}`
      }
    });

    axiosGitHubGraphQL
      .post("", {
        query: GET_ORGANIZATION
      })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}
