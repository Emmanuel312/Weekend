import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './src/services/graphql';
import Main from './src/pages/Main';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  );
};

export default App;
