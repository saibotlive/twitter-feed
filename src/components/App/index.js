import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main';

const App = () => (
  <Switch>
    <Route component={Main} exact path="/" />
    <Route component={Main} path="/handle/:id" />
  </Switch>
);

export default App;
