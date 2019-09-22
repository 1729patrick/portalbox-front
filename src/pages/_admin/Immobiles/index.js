import React from 'react';

import {
  Container,
  LeftAside,
  RigthAside,
  Title,
  NavLink,
} from '~/components/_admin/Layout';

import Route from '~/routes/Route';
import New from './New';
import List from './List';

export default function Immobiles() {
  return (
    <Container>
      <LeftAside>
        <Title>Imóveis</Title>

        <div>
          <NavLink to="/portal/imoveis" exact>
            Novo imóvel
          </NavLink>
          <NavLink to="/portal/imoveis/lista">Lista de imóveis</NavLink>
          <NavLink to="/portal/imoveis/sessoes">Sessões</NavLink>
          <NavLink to="/portal/imoveis/automatizacoes">Automatizações</NavLink>
        </div>
      </LeftAside>
      <RigthAside>
        <Route
          path="/portal/imoveis"
          exact
          component={New}
          isPrivate
          onlyComponent
        />
        <Route
          path="/portal/imoveis/lista"
          exact
          component={List}
          isPrivate
          onlyComponent
        />
      </RigthAside>
    </Container>
  );
}
