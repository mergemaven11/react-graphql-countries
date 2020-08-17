import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";

/**
 * Create New Apollo client and export as default
 */

const link = new HttpLink({
  uri: "https://countries-274616.ew.r.appspot.com",
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});

const query = gql`
  query {
    Country {
      _id
      name
      capital
      population
      nativeName
      # check the docs for more info
    }
  }
`;

client.query({ query }).then((result) => console.log(result));

export default client;
