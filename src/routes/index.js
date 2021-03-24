import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" />
      <Route exact path="/wods" />
      <Route exact path="/wods/:id" />
      <Route exact path="/favourites" />
      <Route exact path="/about" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
