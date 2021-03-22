import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Dashboard from '../components/Dashboard';
import Home from '../components/Home';

const Routes = props => {
  const { info, updateInfo } = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home info={info} updateInfo={updateInfo} />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard info={info} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

Routes.propTypes = {
  info: PropTypes.objectOf(PropTypes.any).isRequired,
  updateInfo: PropTypes.func.isRequired,
};

export default Routes;
