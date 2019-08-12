import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Route from './Route';

import Main from '~/pages/Main';
import Immobiles from '~/pages/Immobiles';
import PlaceDetails from '~/pages/ImmobileDetails';

import ImagesSlider from '~/components/ImagesSlider';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Main} onlyComponent />

      <Route path="/imoveis" exact component={Immobiles} />
      <Route path="/imoveis/:id" exact component={PlaceDetails} simple />
      <Route path="/imoveisx" exact component={ImagesSlider} onlyComponent />
    </BrowserRouter>
  );
};

export default Routes;
