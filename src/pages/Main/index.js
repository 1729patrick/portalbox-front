import React from 'react';
import { Form } from '@rocketseat/unform';

import Select from '~/components/Select';
import Toggle from '~/components/Toggle';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import AdImageBackground from '~/components/Ads/ImageBackground';
import AdVerticalBackground from '~/components/Ads/VerticalBackground';

import { Background, Filter, SubmitButton, Content } from './styles';

import GroupPlaces from '~/components/GroupImmobiles';
import GroupCards from '~/components/GroupCards';

import {
  listImmobiles,
  listLocales,
  optionsLocale,
  optionsType,
} from '~/services/fakeData';

const Main = () => {
  function handleSubmit() {
    // console.log(data);
  }

  return (
    <>
      <Background>
        <Header contranstLight overlay simple searchable={false} />

        <Filter>
          <h1>Reserve lugares únicos para se hospedar e coisas para fazer.</h1>
          <Form
            onSubmit={handleSubmit}
            initialData={{
              finality: 2,
              locale: 2,
              type: 3,
            }}
          >
            <Toggle
              label="O que você precisa?"
              name="finality"
              options={[
                { value: 1, name: 'Alugar' },
                { value: 2, name: 'Comprar' },
              ]}
              value={1}
            />

            <Select
              placeholder="Qualquer tipo"
              options={optionsType}
              name="type"
              label="Qual tipo?"
              multiple={false}
            />

            <Select
              placeholder="Em qualquer lugar"
              options={optionsLocale}
              name="locale"
              label="Onde?"
              multiple={false}
            />

            <SubmitButton type="submit" text="Buscar" />
          </Form>
        </Filter>
      </Background>

      <Content>
        <GroupCards title="Empreendimentos" list={listLocales}/>
        <AdImageBackground
          text="Veja os imóveis mais visualizados na última semana."
          contranstLight
          textButton={"Ver imóveis"}
          style={{ marginTop: 50 }}
        />
        <GroupPlaces style={{ marginTop: 50 }} list={listImmobiles}/>
        <AdVerticalBackground
          text="Encontre os empreendimentos com os melhores acabentos em Chapecó."
          style={{ marginTop: 50 }}
          textButton={"Ver empreendimentos"}
        />
        <GroupCards title="Bairros" style={{ marginTop: 50 }} list={listLocales}/>
      </Content>
      <Footer />
    </>
  );
};

export default Main;
