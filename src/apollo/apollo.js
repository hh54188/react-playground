import React from "react";
// react-apollo 就是用来连接 react 与 apollo client 的类库
// ApolloProvider: 注入 client 的组件（类似于 react-redux 中的 Provider, 可以用来注入 store）
// Query: 查询数据组件
// Mutation: 修改数据组件
// graphql: 用于使用语句生产 Query 或者 Mutation 的高阶组件
import { Query, graphql, ApolloProvider, Mutation } from "react-apollo";

// Javscript 语法模板，用于将 graphql 查询字符串转化为查询语句
import gql from "graphql-tag";

// ApolloLink 就是将 apollo-link-http 和 apollo-link-error 组合起来的东西
import { ApolloLink } from "apollo-link";

import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";

// 用于在应用程序级别（而不是组件级别）
// 处理 GraphQL 错误
import { onError } from "apollo-link-error";
import { InMemoryCache } from "apollo-cache-inmemory";

const token = "518d1dc1fcc606781f8d30b606b1b07590642437";

// ===== APOLLO CLIENT =====
const httpLink = new HttpLink({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer ${token}`
  }
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log(graphQLErrors);
    // do something with graphql error
  }

  if (networkError) {
    console.log(networkError);
    // do something with network error
  }
});
const link = ApolloLink.from([errorLink, httpLink]);

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
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
  query OrgBasicInfoQuery {
    organization(login: "the-road-to-learn-react") {
      name
      url
    }
  }
`;
// const GET_ORG_INFO_QUERY = gql`
//   {
//     organization(login: "the-road-to-learn-react") {
//       name
//       url
//     }
//   }
// `;

// 因为无法获得id，所以这个 mutation 始终没有办法尝试
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

// ===== Hight Order Componnt =====
{
  /* <Query query={GET_ORG_INFO_QUERY}>
          {({ data, loading, error }) => {
            return <App />;
          }}
        </Query> */
}
const DumpComponent = ({ data, loading, error }) => {
  return <App />;
};
const QueryContainer = graphql(GET_ORG_INFO_QUERY)(DumpComponent);
// ===== Hight Order Componnt =====

export default class ApolloApp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <QueryContainer />

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
