import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import Input from '~/components/Input';
import Select from '~/components/Select';

import Card from '~/components/_admin/Card';

export default function Address({
  values,
  setFieldValue,
  errors,
  setFieldTouched,
  touched,
  formSubmitted,
}) {
  const cities = useSelector(state => state.core.cities);

  const path = useMemo(() => values.address, [values.address]);

  const getError = field => {
    return errors.address ? errors.address[field] : null;
  };

  const getTouched = field => {
    return touched.address ? touched.address[field] : null;
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

  const handleCitySelected = value => {
    if (path.city === value) {
      return;
    }

    setFieldValue('address.city', value);
    setFieldValue('address.neighborhood', '');
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
        setTouched={() => setFieldTouched('address.street')}
        touched={getTouched('street')}
        formSubmitted={formSubmitted}
      />

      <Input
        type="number"
        label="Número"
        placeholder="Digite o número"
        optional
        error={getError('number')}
        value={path.number}
        setValue={value => setFieldValue('address.number', value)}
        setTouched={() => setFieldTouched('address.number')}
        touched={getTouched('number')}
        formSubmitted={formSubmitted}
      />

      <Select
        placeholder="Selecione o cidade"
        options={cities}
        label="Cidade"
        multiple={false}
        error={getError('city')}
        selected={path.city}
        setSelected={handleCitySelected}
        setTouched={() => setFieldTouched('address.city')}
        touched={getTouched('city')}
        formSubmitted={formSubmitted}
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
        setTouched={() => setFieldTouched('address.neighborhood')}
        touched={getTouched('neighborhood')}
        formSubmitted={formSubmitted}
      />
    </Card>
  );
}
