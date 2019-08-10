import React from 'react';

import { Container } from './styles';
import GroupImmobiles from '~/components/GroupImmobiles';
import GroupCards from '~/components/GroupCards';

import { listImmobiles, listLocales } from '~/services/fakeData';

export default function Immobiles() {
  return (
    <Container>
      <GroupCards title="Empreendimentos" list={listLocales} />

      <GroupImmobiles style={{ marginTop: 50 }} list={listImmobiles} />

      <GroupCards
        title="Bairros"
        style={{ marginTop: 50 }}
        list={listLocales}
      />
    </Container>
  );
}
