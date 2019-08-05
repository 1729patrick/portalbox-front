import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from '~/pages/Main';
import Places from '~/pages/Places';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Main} />
      <Route path="/imoveis" exact component={Places} />
    </BrowserRouter>
  );
};

export default Routes;
