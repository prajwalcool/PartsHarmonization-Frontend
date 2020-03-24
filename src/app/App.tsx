import React from 'react';
import { Router } from 'react-router-dom';
import history from './@history';
import AppContext from './AppContext';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from '@material-ui/styles';
import routes from './configs/routesConfig';
import { theme } from './configs/themesConfig';
import { AppLayout } from '@app';
import ApolloClient from 'apollo-boost';
const client = new ApolloClient({
  uri: 'http://127.0.0.1:8000/graphql'
});

console.log(theme);
const App = () => {
  return (
    <AppContext.Provider value={{ routes, services: {}, streams: {} }}>
      <Router history={history}>
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <AppLayout />
          </ThemeProvider>
        </ApolloProvider>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
