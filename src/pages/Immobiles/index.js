import React from 'react';

import { Container } from './styles';
import GroupImmobiles from '~/components/GroupImmobiles';
import GroupCards from '~/components/GroupCards';

export default function Immobiles() {
  return (
    <Container>
      <GroupCards title="Empreendimentos" />
      <GroupImmobiles style={{ marginTop: 50 }} />
      <GroupCards title="Bairros" style={{ marginTop: 50 }} />
    </Container>
  );
}
