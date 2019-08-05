import React from 'react';

import { Container } from './styles';
import Place from './Place';

export default function GroupPlaces({ style }) {
  return (
    <Container style={style}>
      <h1>Destaques</h1>

      <div>
        <Place />
        <Place />
        <Place />
        <Place />

        <Place />
        <Place />
        <Place />
        <Place />
      </div>

      <p>Ver todos (201)</p>
    </Container>
  );
}
