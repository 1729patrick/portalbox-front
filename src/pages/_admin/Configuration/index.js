import React from 'react';

import {
  Container,
  LeftAside,
  RigthAside,
  Title,
  NavLink,
} from '~/components/_admin/Layout';

import Route from '~/routes/Route';

import Company from './Company';

export default function Configuration() {
  return (
    <Container>
      <LeftAside>
        <Title>Configurações</Title>

        <div>
          <NavLink to="/portal/configuracoes">Empresa</NavLink>
          <NavLink to="/portal/configuracoes/bairros">Bairros</NavLink>
          <NavLink to="/portal/configuracoes/bairros">Redes Sociais</NavLink>
          <NavLink to="/portal/configuracoes/personalizacao">
            Personalização do PORTAL
          </NavLink>
        </div>
      </LeftAside>
      <RigthAside>
        <Route
          path="/portal/configuracoes"
          exact
          component={Company}
          isPrivate
          onlyComponent
        />
      </RigthAside>
    </Container>
  );
}
