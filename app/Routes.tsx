import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import { Booking } from './Modules/Containers/Booking';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.HOME} component={Booking} />
      </Switch>
    </App>
  );
}
