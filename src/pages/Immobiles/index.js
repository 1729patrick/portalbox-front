import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';
import GroupImmobiles from '~/components/GroupImmobiles';
import GroupCards from '~/components/GroupCards';

import {
  AdImageBackground,
  AdVerticalBackground,
  AdHorizontalBackground,
} from '~/components/Ads';

import { listImmobiles } from '~/services/fakeData';

export default function Immobiles() {
  const types = useSelector(state => state.core.types);

  return (
    <Container>
      <GroupCards title="Tipos" list={types} />

      <AdImageBackground
        title="Veja os imóveis mais visualizados na última semana."
        contranstLight
        textButton="Explorar imóveis"
        style={{ marginTop: 50 }}
      />

      <GroupImmobiles
        style={{ marginTop: 50 }}
        list={listImmobiles}
        title="Destaques"
      />

      <AdVerticalBackground
        title="Encontre os aparamentos com os melhores acabentos em Florianópolis."
        style={{ marginTop: 50 }}
        textButton="Ver apartamentos"
      />
      <GroupImmobiles
        style={{ marginTop: 50 }}
        list={listImmobiles}
        title="Novos"
      />

      <AdHorizontalBackground
        style={{ marginTop: 50 }}
        title="O que você precisa?"
        firstTextButton="Alugar"
        secondTextButton="Comprar"
      />

      <GroupImmobiles
        title="Nossos imóveis"
        style={{ marginTop: 50 }}
        list={listImmobiles}
        showSize={false}
      />
      <GroupImmobiles list={listImmobiles} showSize={false} />
      <GroupImmobiles list={listImmobiles} />
      <GroupImmobiles list={listImmobiles} />
      <GroupImmobiles list={listImmobiles} />
      <GroupImmobiles list={listImmobiles} />
    </Container>
  );
}
