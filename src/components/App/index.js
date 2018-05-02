import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main';
import NotFound from '../NotFound';

const App = () => (
  <Switch>
    <Route component={Main} exact path="/" />
    <Route component={Main} path="/user/:id" />
    <Route component={NotFound} />
  </Switch>
);

export default App;
