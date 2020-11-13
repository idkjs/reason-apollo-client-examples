import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import App from "./App.bs";
// import { split } from "@apollo/client";
// import { HttpLink } from "@apollo/client";
// // import { ApolloClient } from "@apollo/client";
// import { WebSocketLink } from "@apollo/client/link/ws";
// import { ApolloProvider,split, getMainDefinition,InMemoryCache ,ApolloClient,HttpLink} from "@apollo/client";
import client from "./Client.bs";

// const wsLink = new WebSocketLink({
//   uri: `ws://localhost:4000/graphql`,
//   options: {
//     reconnect: true,
//   },
// });

// const httpLink = new HttpLink({
//   uri: "http://localhost:4000/graphql",
// });

// const link = split(
//   // split based on operation type
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === "OperationDefinition" &&
//       definition.operation === "subscription"
//     );
//   },
//   wsLink,
//   httpLink
// );

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link,
// });

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.Fragment>
      <App />
    </React.Fragment>
  </ApolloProvider>,
  document.getElementById("root")
);
