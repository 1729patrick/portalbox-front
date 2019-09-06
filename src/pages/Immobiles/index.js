import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from './styles';
import GroupImmobiles from '~/components/GroupImmobiles';
import GroupCards from '~/components/GroupCards';

import {
  AdImageBackground,
  AdVerticalBackground,
  AdHorizontalBackground,
} from '~/components/Ads';

import { loadSessionImmobilesRequest } from '~/store/modules/immobiles/actions';

export default function Immobiles() {
  const dispatch = useDispatch();

  const types = useSelector(state => state.core.types);
  const saleHighlights = useSelector(state => state.immobiles.saleHighlights);
  const rentalHighlights = useSelector(
    state => state.immobiles.rentalHighlights
  );

  useEffect(() => {
    dispatch(loadSessionImmobilesRequest({ session: 3 }));
    dispatch(loadSessionImmobilesRequest({ session: 2 }));
  }, [dispatch]);

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
        title="Destaques de locação"
        {...rentalHighlights}
      />

      <AdVerticalBackground
        title="Encontre os aparamentos com os melhores acabentos em Florianópolis."
        style={{ marginTop: 50 }}
        textButton="Ver apartamentos"
      />

      <GroupImmobiles
        style={{ marginTop: 50 }}
        title="Destaque de venda"
        {...saleHighlights}
      />

      <AdHorizontalBackground
        style={{ marginTop: 50 }}
        title="O que você precisa?"
        firstTextButton="Alugar"
        secondTextButton="Comprar"
      />

      {/* <GroupImmobiles
        title="Nossos imóveis"
        style={{ marginTop: 50 }}
        list={listImmobiles}
        showSize={false}
      />
      <GroupImmobiles list={listImmobiles} showSize={false} />
      <GroupImmobiles list={listImmobiles} />
      <GroupImmobiles list={listImmobiles} />
      <GroupImmobiles list={listImmobiles} />
      <GroupImmobiles list={listImmobiles} /> */}
    </Container>
  );
}
