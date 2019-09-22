import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import Input from '~/components/Input';
import Select from '~/components/Select';

import Card from '~/components/_admin/Card';

export default function Address({ values, setFieldValue, errors }) {
  const cities = useSelector(state => state.core.cities);

  const path = useMemo(() => values.address, [values.address]);

  const getError = field => {
    return errors.address ? errors.address[field] : null;
  };

  const handleNeighborhoodSelected = value => {
    if (!path.city) {
      const city = cities.find(city =>
        city.neighborhoods.find(neighborhood => neighborhood._id === value._id)
      );

      setFieldValue('address.city', city);
    }

    setFieldValue('address.neighborhood', value);
  };

  return (
    <Card>
      <div>
        <h1>Endereço</h1>
      </div>

      <Input
        type="text"
        label="Rua"
        placeholder="Digite o nome da rua"
        error={getError('street')}
        value={path.street}
        setValue={value => setFieldValue('address.street', value)}
      />

      <Input
        type="number"
        label="Número"
        placeholder="Digite o número"
        optional
        error={getError('number')}
        value={path.number}
        setValue={value => setFieldValue('address.number', value)}
      />

      <Select
        placeholder="Selecione o cidade"
        options={cities}
        label="Cidade"
        multiple={false}
        error={getError('city')}
        selected={path.city}
        setSelected={value => setFieldValue('address.city', value)}
      />

      <Select
        placeholder="Selecione o bairro"
        options={path.city ? [path.city] : cities}
        label="Bairro"
        multiple={false}
        groupedData
        keys={{
          label: 'name',
          options: 'neighborhoods',
          option: 'name',
          value: '_id',
        }}
        error={getError('neighborhood')}
        selected={path.neighborhood}
        setSelected={handleNeighborhoodSelected}
      />
    </Card>
  );
}
