import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from './styles';
import GroupImmobiles from '~/components/GroupImmobiles';
import GroupCards from '~/components/GroupCards';
import Loading from './Loading';

import {
  AdImageBackground,
  AdVerticalBackground,
  AdHorizontalBackground,
} from '~/components/Ads';

import { loadSessionImmobilesRequest } from '~/store/modules/immobiles/actions';

export default function Immobiles() {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.filter.loading);

  const types = useSelector(state => state.core.types);
  const saleHighlights = useSelector(state => state.immobiles.saleHighlights);
  const rentalHighlights = useSelector(
    state => state.immobiles.rentalHighlights
  );

  const resultFilter = useSelector(state => state.filter.result);

  useEffect(() => {
    dispatch(loadSessionImmobilesRequest({ session: 3 }));
    dispatch(loadSessionImmobilesRequest({ session: 2 }));
  }, [dispatch]);

  const titleResultFilter = useMemo(() => {
    return resultFilter.count
      ? `${resultFilter.count} imóveis encontrados`
      : 'Desculpe, não encontramos imóveis com os critérios da busca.';
  }, [resultFilter.count]);

  const showResultFilter = useSelector(state => {
    const { filters } = state.filter;
    const filterWithValueSaved = Object.keys(filters)
      .map(filter => Object.entries(filters[filter].saved).length !== 0)
      .filter(value => value);

    return filterWithValueSaved.length >= 1;
  });

  return (
    <Container>
      {showResultFilter && (
        <GroupImmobiles
          style={{ marginBottom: 50 }}
          title={titleResultFilter}
          {...resultFilter}
          showSize={resultFilter.count > 1000}
        />
      )}

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
      /> */}

      {loading && <Loading />}
    </Container>
  );
}
