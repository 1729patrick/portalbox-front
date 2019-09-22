import React from 'react';
import { useSelector } from 'react-redux';

import Card from '~/components/_admin/Card';

import Select from '~/components/Select';
import Input from '~/components/Input';

export default function Address() {
  const cities = useSelector(state => state.core.cities);

  return (
    <Card>
      <div>
        <h1>Endereço</h1>
      </div>

      <Input
        type="text"
        label="Rua"
        placeholder="Digite o nome da rua"
        // error={getError('street')}
        // value={path.street}
        // setValue={value => setFieldValue('address.street', value)}
      />

      <Input
        type="number"
        label="Número"
        placeholder="Digite o número"
        optional
        // error={getError('number')}
        // value={path.number}
        // setValue={value => setFieldValue('address.number', value)}
      />

      <Input
        type="number"
        label="CEP"
        placeholder="Digite o CEP"
        // error={getError('number')}
        // value={path.number}
        // setValue={value => setFieldValue('address.number', value)}
      />

      <Select
        placeholder="Selecione o cidade"
        options={cities}
        label="Cidade"
        multiple={false}
        // error={getError('city')}
        // selected={path.city}
        // setSelected={value => setFieldValue('address.city', value)}
      />

      <Select
        placeholder="Selecione o bairro"
        // options={path.city ? [path.city] : cities}
        options={cities}
        label="Bairro"
        multiple={false}
        groupedData
        keys={{
          label: 'name',
          options: 'neighborhoods',
          option: 'name',
          value: '_id',
        }}
        // error={getError('neighborhood')}
        // selected={path.neighborhood}
        // setSelected={handleNeighborhoodSelected}
      />
    </Card>
  );
}
