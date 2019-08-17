import React from 'react';
import { Form } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import Select from '~/components/Select';
import Toggle from '~/components/Toggle';

import { Container, SubmitButton } from './styles';

import { optionsLocale, optionsType } from '~/services/fakeData';

export default function Filter() {
  function handleSubmit() {
    // console.log(data);
  }

  return (
    <Container>
      <h1>Encontre seu novo imóvel aqui na imobiliária ATMA.</h1>
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
          isSearchable={false}
        />

        <Select
          placeholder="Em qualquer lugar"
          options={optionsLocale}
          name="locale"
          label="Onde?"
          multiple={false}
          isSearchable={false}
        />

        <Link to="/imoveis">
          <SubmitButton type="submit" text="Buscar" />
        </Link>
      </Form>
    </Container>
  );
}
