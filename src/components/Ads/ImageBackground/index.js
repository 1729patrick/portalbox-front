import React from 'react';

import { Container, Button } from './styles';

export default function ImageBackground({ text, contranstLight, style }) {
  return (
    <Container contranstLight={contranstLight} style={style}>
      <h1>{text}</h1>

      <Button text="Ver imóveis" />
    </Container>
  );
}
