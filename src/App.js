import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { HeaderScreen } from './components/Header';

const client = new ApolloClient({
  uri: 'https://cleanmultiservices-graphql.herokuapp.com'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <HeaderScreen />
      </div>
    </ApolloProvider>
  );
}

export default App;
