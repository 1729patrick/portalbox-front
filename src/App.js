import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from '~/services/history';

import Theme from './theme';

import '~/config/Reactotron';
import { store, persistor } from './store';

import Loading from '~/components/Loading';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Theme>
            <Routes />
            <ToastContainer />
            <Loading />
          </Theme>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
