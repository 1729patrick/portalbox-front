import React from 'react';

import { Container } from './styles';
import GroupImmobiles from '~/components/GroupImmobiles';
import GroupCards from '~/components/GroupCards';

import { AdImageBackground, AdVerticalBackground, AdHorizontalBackground, } from '~/components/Ads';

import { listImmobiles, listTypes } from '~/services/fakeData';

export default function Immobiles() {
  return (
    <Container>
      <GroupCards title="Tipos" list={listTypes} />

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
        title="Encontre os aparamentos com os melhores acabentos em Chapecó."
        style={{ marginTop: 50 }}
        textButton="Ver apartamentos"
      />
      <GroupImmobiles
        style={{ marginTop: 50 }}
        list={listImmobiles}
        title="Novos"
      />

    <AdHorizontalBackground style={{ marginTop: 50 }}
      title="O que você precisa?"
      firstTextButton="Preciso alugar"
      secondTextButton="Preciso comprar"
    ></AdHorizontalBackground>

      <GroupImmobiles
        title="Nossos imóveis"
        style={{ marginTop: 50 }}
        list={listImmobiles}
        showSize={false}
      />
      <GroupImmobiles list={listImmobiles} showSize={false} />
      <GroupImmobiles list={listImmobiles} />
    </Container>
  );
}
