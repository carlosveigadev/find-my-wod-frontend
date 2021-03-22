import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Dashboard from '../components/Dashboard';
import Home from '../components/Home';

const Routes = props => {
  const { info } = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home info={info} />
        </Route>
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

Routes.propTypes = {
  info: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Routes;
