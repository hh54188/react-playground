import React from "react";
import { Query, graphql, ApolloProvider, Mutation } from "react-apollo";

import gql from "graphql-tag";

import { ApolloLink } from "apollo-link";

import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { InMemoryCache } from "apollo-cache-inmemory";

const token = "eaaf1bb18ee1c3806127aa10e32f1c56af6017fb ";

// ===== APOLLO CLIENT =====
const httpLink = new HttpLink({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer ${token}`
  }
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache
});

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>App</div>;
  }
}
// ===== APOLLO CLIENT =====

// ===== QUERY =====
const GET_ORG_INFO_QUERY = gql`
  {
    organization(login: "the-road-to-learn-react") {
      name
      url
    }
  }
`;

const STAR_REPOSITORY = gql`
  mutation($id: ID!) {
    addStar(input: { starrableId: $id }) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;
// ===== QUERY =====

const DumpComponent = ({ data, loading, error }) => {
  return <App />;
};
const QueryContainer = graphql(GET_ORG_INFO_QUERY)(DumpComponent);

export default class ApolloApp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <DumpComponent />
        {/* <Query query={GET_ORG_INFO_QUERY}>
          {({ data, loading, error }) => {
            return <App />;
          }}
        </Query> */}
        {/* <Mutation
          query={STAR_REPOSITORY}
          variables={{ id: "the-road-to-learn-react" }}
        >
          {(addStar, { data, loading, error }) => {
            return <button onClick={addStar}>Star</button>;
          }}
        </Mutation> */}
      </ApolloProvider>
    );
  }
}
