import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import Main from '~/pages/Main';
import Immobiles from '~/pages/Immobiles';
import ImmobileDetails from '~/pages/ImmobileDetails';

import AdminSignIn from '~/pages/_admin/SignIn';
import AdminDashboard from '~/pages/_admin/Dashboard';
import AdminImmobiles from '~/pages/_admin/Immobiles';
import AdminConfiguration from '~/pages/_admin/Configuration';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} onlyComponent />
        <Route path="/imoveis" exact component={Immobiles} />
        <Route
          path="/imoveis/:_id/:address"
          exact
          component={ImmobileDetails}
          simple
        />

        <Route path="/login" exact component={AdminSignIn} onlyComponent />
        <Route path="/portal" exact component={AdminDashboard} isPrivate />
        <Route
          path="/portal/imoveis"
          exact
          component={AdminImmobiles}
          isPrivate
        />
        <Route
          path="/portal/configuracoes"
          exact
          component={AdminConfiguration}
          isPrivate
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
