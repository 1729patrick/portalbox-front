import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from './styles';
import GroupImmobiles from '~/components/GroupImmobiles';
import GroupCards from '~/components/GroupCards';
import Loading from './Loading';

import { formatImmobileAvaliableCount } from '~/services/format';

import {
  AdImageBackground,
  AdVerticalBackground,
  AdHorizontalBackground,
} from '~/components/Ads';

import { loadSessionImmobilesRequest } from '~/store/modules/immobiles/actions';
import {
  setTypesFilter,
  setFinalityFilter,
  saveFilterRequest,
} from '~/store/modules/filter/actions';

export default function Immobiles() {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.filter.loading);

  const types = useSelector(state => state.core.types);

  const saleHighlights = useSelector(state => state.immobiles.saleHighlights);

  const rentalHighlights = useSelector(
    state => state.immobiles.rentalHighlights
  );

  const resultFilter = useSelector(state => state.filter.result);
  const empty = useSelector(state => state.filter.empty);

  useEffect(() => {
    dispatch(loadSessionImmobilesRequest({ session: 3 }));
    dispatch(loadSessionImmobilesRequest({ session: 2 }));
  }, [dispatch]);

  const titleResultFilter = useMemo(() => {
    return formatImmobileAvaliableCount(resultFilter.count);
  }, [resultFilter.count]);

  const handleClickType = type => {
    dispatch(setTypesFilter({ types: [type] }));
    dispatch(saveFilterRequest());
  };

  const handleClickFinality = finality => {
    dispatch(setFinalityFilter({ finality }));
    dispatch(saveFilterRequest());
  };

  return (
    <Container>
      {!empty && (
        <GroupImmobiles
          style={{ marginBottom: 50 }}
          title={titleResultFilter}
          {...resultFilter}
          showSize={resultFilter.count > 1000}
        />
      )}

      <GroupCards title="Tipos" list={types} onClick={handleClickType} />

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
        onClick={() =>
          handleClickType({
            image: '',
            name: 'Apartamento',
            _id: '5ddfd1c309817c0d7393a958',
          })
        }
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
        firstOnClick={() =>
          handleClickFinality({ value: 'rent', title: 'Alugar' })
        }
        secondOnClick={() =>
          handleClickFinality({ value: 'sale', title: 'Comprar' })
        }
      />

      {loading && <Loading />}
    </Container>
  );
}
