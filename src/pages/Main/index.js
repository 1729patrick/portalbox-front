import React from 'react';
import { Form } from '@rocketseat/unform';

import Select from '~/components/Select';
import Toggle from '~/components/Toggle';
import Header from '~/components/Header';
import { Background, Filter, SubmitButton, Content } from './styles';

import GroupPlaces from '~/components/GroupImmobiles';
import GroupCards from '~/components/GroupCards';

const options = [
  { id: 1, title: 'Centro' },
  { id: 2, title: 'São Jorge' },
  { id: 3, title: 'Agostini' },
  { id: 4, title: 'Andreatta' },
  { id: 6, title: 'Estrela' },
];

const Main = () => {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <Background>
        <Header contranstLight overlay simple searchable={false}  />

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
              options={options}
              name="type"
              label="Qual tipo?"
              multiple={false}
            />

            <Select
              placeholder="Em qualquer lugar"
              options={options}
              name="locale"
              label="Onde?"
              multiple={false}
            />

            <SubmitButton type="submit" text="Buscar" />
          </Form>
        </Filter>
      </Background>

      <Content>
        <GroupCards title="Empreendimentos" />
        <GroupPlaces style={{ marginTop: '30px' }} />
        <GroupCards title="Bairros" style={{ marginTop: '30px' }} />
      </Content>
    </>
  );
};

export default Main;
