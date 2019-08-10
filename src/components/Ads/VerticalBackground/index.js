import React from 'react';

import { Container, Triangle, Button } from './styles';

export default function VerticalBackground({ text, style }) {
  return (
    <Container style={style}>
      <Triangle>
        <h1>{text}</h1>
        <Button text="Ver empreendimentos" />
      </Triangle>
    </Container>
  );
}
