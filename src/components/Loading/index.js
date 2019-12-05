import React, { useState, useEffect } from 'react';

// import CircularProgress from '@material-ui/core/CircularProgress';
// import LinearProgress from '@material-ui/core/LinearProgress';
import loadingGif from '~/assets/loading.gif';

import { Container } from './styles';

export default function Loading() {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPoints(p => {
        if (p.length === 3) {
          return [];
        }

        return [...p, p.length];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      {/* <CircularProgress /> */}
      <img src={loadingGif} alt="" />

      <p>
        Carregando
        {points.map(point => (
          <span key={point}>.</span>
        ))}
      </p>
    </Container>
  );
}
