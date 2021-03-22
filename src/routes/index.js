import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Home from '../components/Home';

const Routes = () => {
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  </BrowserRouter>;
};

export default Routes;
