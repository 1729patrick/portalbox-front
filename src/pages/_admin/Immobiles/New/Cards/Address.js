import React from 'react';
import { useSelector } from 'react-redux';
import { Scope } from '@rocketseat/unform';

import Input from '~/components/Input';
import Select from '~/components/Select';

export default function Address() {
  const cities = useSelector(state => state.core.cities);
  return (
    <Scope path="address">
      <div>
        <h1>Endereço</h1>
      </div>

      <Input
        type="text"
        name="street"
        label="Rua"
        placeholder="Digite o nome da rua"
      />
      
      <Input
        type="number"
        name="number"
        label="Número"
        placeholder="Digite o número"
        optional
      />

      <Select
        placeholder="Selecione o bairro"
        options={cities}
        name="city"
        label="Cidade"
        multiple={false}
      />

      <Select
        placeholder="Selecione o bairro"
        options={cities}
        name="neighborhood"
        label="Bairro"
        multiple={false}
        groupedData
        keys={{
          label: 'name',
          options: 'neighborhoods',
          option: 'name',
          value: '_id',
        }}
      />
    </Scope>
  );
}
