import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useSelector } from 'react-redux';
import loadingGif from '~/assets/loading.gif';

import { Container } from './styles';

export default function Loading() {
  const loading = useSelector(state => state.immobiles.loading);

  if (!loading) return null;

  return (
    <Container>
      {/* <img src={loadingGif} alt="gif" />
      <LinearProgress /> */}

      <CircularProgress />
    </Container>
  );
}
