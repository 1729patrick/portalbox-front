import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import Theme from './theme';

import '~/config/Reactotron';
import { store, persistor } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Theme>
          <Routes />
          <ToastContainer />
        </Theme>
      </PersistGate>
    </Provider>
  );
};

export default App;
