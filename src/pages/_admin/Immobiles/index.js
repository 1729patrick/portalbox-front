import React from 'react';

import {
  Container,
  LeftAside,
  RigthAside,
  Title,
  Route,
} from '~/components/_admin/Layout';

import New from './New';

export default function Immobiles() {
  return (
    <Container>
      <LeftAside>
        <Title>Imóveis</Title>

        <div>
          <Route to="/portal/imoveis">Novo imóvel</Route>
          <Route to="/portal/imoveis/listar">Lista de imóveis</Route>
          <Route to="/portal/imoveis/destaque">Imóveis em destaque</Route>
          <Route to="/portal/imoveis/automatizacao">Automatização</Route>
        </div>
      </LeftAside>
      <RigthAside>
        <New />
      </RigthAside>
    </Container>
  );
}
