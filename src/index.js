import { ApolloClient, ApolloProvider, InMemoryCache, gql } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

export const client = new ApolloClient({
  uri: `http://localhost:5555/graphql`,
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);