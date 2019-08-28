import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import { IoIosArrowDown } from 'react-icons/io';
import { useSelector } from 'react-redux';

import Header from '~/components/Header';
import Footer from '~/components/Footer';

import { AdImageBackground, AdVerticalBackground } from '~/components/Ads';

import { Background, Content } from './styles';
import Filter from './Filter';

import GroupImmobiles from '~/components/GroupImmobiles';
import GroupCards from '~/components/GroupCards';

import { listImmobiles } from '~/services/fakeData';

import {loadSessionImmobilesRequest} from '~/store/modules/immobiles/actions'
const Main = () => {
  const dispatch = useDispatch()
  const banner = useSelector(state => state.company.banner);
  const types = useSelector(state => state.core.types);
const news = useSelector(state=> state.immobiles.news)

useEffect(() => {
        dispatch(loadSessionImmobilesRequest({ sessions: [1, 2] }));
  }, [dispatch])

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
        <GroupCards title="Tipos" list={types} />

        <AdImageBackground
          title="Veja os imóveis mais visualizados na última semana."
          contranstLight
          textButton="Explorar imóveis"
          style={{ marginTop: 50 }}
        />
        {/* <GroupImmobiles
          style={{ marginTop: 50 }}
          list={listImmobiles}
          title="Destaques de locação"
        /> */}
        <AdVerticalBackground
          title="Encontre os aparamentos com os melhores acabentos em Florianópolis."
          style={{ marginTop: 50 }}
          textButton="Ver apartamentos"
        />
        <GroupImmobiles
          style={{ marginTop: 50 }}
          title="Novos"
          {...news}
        />
      </Content>
      <Footer />
    </>
  );
};

export default Main;
