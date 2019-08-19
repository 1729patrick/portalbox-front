import React from 'react';

import { Container, Options, Content, ButtonOption } from './styles';
import New from './New';

export default function Immobiles() {
  return (
    <Container>
      <Options>
        <h2>Imóveis</h2>

        <div>
          <ButtonOption type="button" active>
            Novo imóvel
          </ButtonOption>
          <ButtonOption type="button">Lista de imóveis</ButtonOption>
          <ButtonOption type="button">Imóveis em destaque</ButtonOption>
          <ButtonOption type="button">Automatização</ButtonOption>
        </div>
      </Options>
      <Content>
        <New />
      </Content>
    </Container>
  );
}
