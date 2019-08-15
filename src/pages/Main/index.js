import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import Header from '~/components/Header';
import Footer from '~/components/Footer';

import { AdImageBackground, AdVerticalBackground } from '~/components/Ads';

import { Background, Content } from './styles';
import Filter from './Filter';

import GroupImmobiles from '~/components/GroupImmobiles';
import GroupCards from '~/components/GroupCards';

import { listImmobiles, listTypes } from '~/services/fakeData';

const Main = () => {
  return (
    <>
      <Background>
        <Header contranstLight overlay simple searchable={false} />
        <Filter />

        <span>
          <IoIosArrowDown size={35} color="#fff" />
        </span>
      </Background>

      <Content>
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
          title="Encontre os aparamentos com os melhores acabentos em Florianópolis."
          style={{ marginTop: 50 }}
          textButton="Ver apartamentos"
        />
        <GroupImmobiles
          style={{ marginTop: 50 }}
          list={listImmobiles}
          title="Novos"
        />
      </Content>
      <Footer />
    </>
  );
};

export default Main;
