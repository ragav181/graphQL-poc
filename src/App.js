import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import homePageComponent from "./component/landingpage/Homepage";
import { ApolloProvider } from "@apollo/client";
import "./App.css";
import { ApolloClient, InMemoryCache,gql  } from '@apollo/client';


const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

client
.query({
  query: gql`
    query GetRates {
      rates(currency: "USD") {
        currency
      }
    }
  `
})
.then(result => console.log(result));

function App()  {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={homePageComponent} />
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    );

}

export default App;
