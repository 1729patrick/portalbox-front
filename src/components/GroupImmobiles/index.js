import React from 'react';

import { Container } from './styles';
import ImmobileCard from './ImmobileCard';

export default function GroupImmobiles({ style }) {
  return (
    <Container style={style}>
      <h1>Destaques</h1>

      <div>
        <ImmobileCard />
        <ImmobileCard />
        <ImmobileCard />
        <ImmobileCard />

        <ImmobileCard />
        <ImmobileCard />
        <ImmobileCard />
        <ImmobileCard />
      </div>

      <p>Ver todos (201)</p>
    </Container>
  );
}
