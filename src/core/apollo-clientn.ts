import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { JWT_ADMIN_TOKEN } from "./constants";

const httpLink = createHttpLink({ uri: "http://localhost:8080/v1/graphql" });
// https://assuring-kodiak-14.hasura.app/v1/graphql

const authLink = setContext((_, config) => {
  const token = localStorage.getItem(JWT_ADMIN_TOKEN);

  if (!token) {
    return config;
  }

  return {
    headers: {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    },
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
