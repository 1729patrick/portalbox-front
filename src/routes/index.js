import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Route from './Route';

import Main from '~/pages/Main';
import Immobiles from '~/pages/Immobiles';
import PlaceDetails from '~/pages/ImmobileDetails';

import SignIn from '~/pages/SignIn';

import Dashboard from '~/pages/Dashboard';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Main} onlyComponent />
      <Route path="/imoveis" exact component={Immobiles} />
      <Route path="/imoveis/:id" exact component={PlaceDetails} simple />

      <Route path="/login" exact component={SignIn} onlyComponent />
      <Route path="/auth" exact component={Dashboard} onlyComponent />
      <Route path="/auth/imoveis" exact component={Dashboard} onlyComponent />
    </BrowserRouter>
  );
};

export default Routes;
