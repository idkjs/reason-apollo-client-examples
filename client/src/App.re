[@react.component]
let app = () => {
  <ApolloClient.React.ApolloProvider client=Client.instance>
    <React.Fragment> <Companies /> </React.Fragment>
  </ApolloClient.React.ApolloProvider>;
};

let default = app;
