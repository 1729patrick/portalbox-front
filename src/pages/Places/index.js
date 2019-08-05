import React from 'react';

import { Container, Content } from './styles';
import GroupPlaces from '~/components/GroupPlaces';
import GroupCards from '~/components/GroupCards';
import Header from '~/components/Header';

export default function Places() {
  return (
    <Container>
      <Header />

      <Content>
        <GroupCards title="Empreendimentos" />
        <GroupPlaces style={{ marginTop: '30px' }} />
        <GroupCards title="Bairros" style={{ marginTop: '30px' }} />
      </Content>
    </Container>
  );
}
