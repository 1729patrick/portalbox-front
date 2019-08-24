import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import axios from 'axios';
import Routes from './routes';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
//
const App = () => {
  const [theme, setTheme] = useState();

  useEffect(() => {
    const load = async () => {
      const sessions = await axios.get('http://localhost:3333/sessions', {
        headers: { domain: 'kkkaasjndasjdn' },
      });

      const themex = await axios.get(
        `http://localhost:3333/static/core/colors/${sessions.data.company._id}.json`
      );

      setTheme(themex.data);
    };

    load();
  }, []);

  if (!theme) {
    return <div>carregando</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <Routes />
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
};

export default App;
