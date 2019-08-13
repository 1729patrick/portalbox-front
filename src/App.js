import React from 'react';
import 'dotenv';

import Routes from './routes';
import GlobalStyle from './styles/global';

const App = () => {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
};

export default App;
