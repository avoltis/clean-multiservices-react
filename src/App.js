import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Router, Route, Switch } from 'react-router-dom';
import { HeaderScreen } from './components/Header';
import { HomeScreen } from './components/Home';
// import { AboutScreen } from './components/About';
// import { ProductsScreen } from './components/Products';
// import { StoreScreen } from './components/Store';
// import { ContactScreen } from './components/Contact';
import history from './history';
import 'jquery/dist/jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/business-casual.min.css';

const client = new ApolloClient({
  uri: 'https://cleanmultiservices-graphql.herokuapp.com'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router history={history}>
          <HeaderScreen />
          <Switch>
            <Route path="/" exact component={HomeScreen} />
            {/* <Route path="/about" exact component={AboutScreen} />
            <Route path="/products" exact component={ProductsScreen} />
            <Route path="/store" exact component={StoreScreen} />
            <Route path="/contact" exact component={ContactScreen} /> */}
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
