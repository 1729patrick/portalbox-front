import React from 'react';

import {
  Container,
  LeftAside,
  RigthAside,
  Title,
  Route,
  Card,
} from '~/components/_admin/Layout';

export default function Configuration() {
  return (
    <Container>
      <LeftAside>
        <Title>Configurações</Title>

        <div>
          <Route to="/portal/configuracoes">Minha empresa</Route>
          <Route to="/portal/configuracoes/endereco">Endereço</Route>
          <Route to="/portal/configuracoes/contato">Contato</Route>
          <Route to="/portal/configuracoes/personalizacao">
            Personalização do PORTAL
          </Route>
        </div>
      </LeftAside>
      <RigthAside>
        <Card>x</Card>
      </RigthAside>
    </Container>
  );
}
