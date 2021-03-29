import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../containers/Login';
import SigIn from '../containers/SignIn';
import WodsId from '../containers/WodsId';
import Favourites from '../containers/Favourites';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signin" component={SigIn} />
      <Route exact path="/wods/:id" component={WodsId} />
      <Route exact path="/favourites" component={Favourites} />
      <Route exact path="/about" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
