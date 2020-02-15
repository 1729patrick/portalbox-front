import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosArrowDown } from 'react-icons/io';

import Header from '~/components/Header';
import Footer from '~/components/Footer';

import {
  AdImageBackground,
  AdVerticalBackground,
  AdHorizontalBackground,
} from '~/components/Ads';

import { Background, Content } from './styles';
import Filter from './Filter';

import GroupImmobiles from '~/components/GroupImmobiles';
import GroupCards from '~/components/GroupCards';

import { loadSessionImmobilesRequest } from '~/store/modules/immobiles/actions';
import {
  setTypesFilter,
  setFinalityFilter,
  saveFilterRequest,
} from '~/store/modules/filter/actions';

const Main = ({ history }) => {
  const dispatch = useDispatch();

  const banner = useSelector(state => state.company.banner?.url);
  const types = useSelector(state => state.core.types);

  const saleHighlights = useSelector(state => state.immobiles.saleHighlights);
  const rentalHighlights = useSelector(
    state => state.immobiles.rentalHighlights
  );

  useEffect(() => {
    dispatch(loadSessionImmobilesRequest({ session: 3 }));
    dispatch(loadSessionImmobilesRequest({ session: 2 }));
  }, [dispatch]);

  const handleClickType = type => {
    history.push('/imoveis');
    dispatch(setTypesFilter({ types: [type] }));
    dispatch(saveFilterRequest());
  };

  const handleClickFinality = finality => {
    history.push('/imoveis');
    dispatch(setFinalityFilter({ finality }));
    dispatch(saveFilterRequest());
  };

  return (
    <>
      <Background banner={banner}>
        <Header contranstLight overlay simple searchable={false} />
        <Filter types={types} />

        <span>
          <IoIosArrowDown size={35} color="#fff" />
        </span>
      </Background>

      <Content>
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
          title="Encontre os aparamentos com os melhores acabentos em Bandeirante."
          style={{ marginTop: 50 }}
          textButton="Ver apartamentos"
          onClick={() =>
            handleClickType({
              image:
                'https://portalbox.tech/static/files/ea7fd4cc1c238bd09f02e10a475d2551.jpg',
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
      </Content>
      <Footer />
    </>
  );
};

export default Main;
