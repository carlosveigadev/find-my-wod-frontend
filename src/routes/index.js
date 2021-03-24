import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/wods" />
      <Route exact path="/wods/:id" />
      <Route exact path="/favourites" />
      <Route exact path="/about" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
