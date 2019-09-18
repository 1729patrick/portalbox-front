import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosArrowDown } from 'react-icons/io';

import Header from '~/components/Header';
import Footer from '~/components/Footer';

import { AdImageBackground, AdVerticalBackground } from '~/components/Ads';

import { Background, Content } from './styles';
import Filter from './Filter';

import GroupImmobiles from '~/components/GroupImmobiles';
import GroupCards from '~/components/GroupCards';

import { loadSessionImmobilesRequest } from '~/store/modules/immobiles/actions';

const Main = () => {
  const dispatch = useDispatch();

  const banner = useSelector(state => state.company.banner);
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
    // console.log(type);
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
          title="Encontre os aparamentos com os melhores acabentos em Florianópolis."
          style={{ marginTop: 50 }}
          textButton="Ver apartamentos"
        />

        <GroupImmobiles
          style={{ marginTop: 50 }}
          title="Destaque de venda"
          {...saleHighlights}
        />
      </Content>
      <Footer />
    </>
  );
};

export default Main;
