import React from 'react';

import { Container, MapsImage, ButtonExplore } from './styles';

export default function Maps({ openPreview }) {
  return (
    <Container>
      <header>
        <h2>Conheça o bairro</h2>
        <p>Rua Maria Lúcia da Paz - Gleba Fazenda Palhano, Londrina - PR</p>
      </header>

      <MapsImage>
        <div />

        <span />

        <ButtonExplore text="Ver Mapa" onClick={openPreview} />
      </MapsImage>
    </Container>
  );
}
