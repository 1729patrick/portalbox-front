import React from 'react';

import { Container, MapsImage, ButtonExplore } from './styles';

export default function Maps({ openPreview, address }) {
  return (
    <Container>
      <header>
        <h2>Conheça o bairro</h2>
        <p>{address}</p>
      </header>

      <MapsImage>
        <div />

        <span />

        <ButtonExplore text="Ver Mapa" onClick={openPreview} />
      </MapsImage>
    </Container>
  );
}
