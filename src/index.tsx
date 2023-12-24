import React from "react";
import ReactDOM from "react-dom/client";
import App from "@app/App";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./core/apollo-clientn";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
);
