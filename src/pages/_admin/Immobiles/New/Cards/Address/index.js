import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import Input from '~/components/Input';
import Select from '~/components/Select';

import { Card } from '../../styles';

export default function Address({ values, setFieldValue }) {
  const cities = useSelector(state => state.core.cities);

  const path = useMemo(() => values.address, [values.address]);

  return (
    <Card>
      <div>
        <h1>Endereço</h1>
      </div>

      <Input
        type="text"
        label="Rua"
        placeholder="Digite o nome da rua"
        value={path.street}
        setValue={value => setFieldValue('address.street', value)}
      />

      <Input
        type="number"
        label="Número"
        placeholder="Digite o número"
        optional
        value={path.number}
        setValue={value => setFieldValue('address.number', value)}
      />

      <Select
        placeholder="Selecione o bairro"
        options={cities}
        label="Cidade"
        multiple={false}
        selected={path.city}
        setSelected={value => setFieldValue('address.city', value)}
      />

      <Select
        placeholder="Selecione o bairro"
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
        selected={path.neighborhood}
        setSelected={value => setFieldValue('address.neighborhood', value)}
      />
    </Card>
  );
}
