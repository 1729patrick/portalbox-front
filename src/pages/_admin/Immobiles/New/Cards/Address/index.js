import React, { useMemo, useEffect } from 'react';
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

  useEffect(() => {
    if (path.city) {
      const existNeighborhoodInCity = path.city.neighborhoods.some(
        neighborhood => neighborhood._id === path.neighborhood?._id
      );

      if (!existNeighborhoodInCity) {
        setFieldValue('address.neighborhood', '');
      }
    }
  }, [cities, path.city, path.neighborhood, setFieldValue]);

  useEffect(() => {
    if (!path.city && path.neighborhood) {
      const city = cities.find(c =>
        c.neighborhoods.some(
          neighborhood => neighborhood._id === path.neighborhood?._id
        )
      );
      setFieldValue('address.city', city);
    }
  }, [cities, path.city, path.neighborhood, setFieldValue]);

  return (
    <Card>
      <div>
        <h1>Endereço</h1>
      </div>
      <Input
        type="text"
        label="Rua"
        placeholder="Digite o nome da rua"
        error={errors.address?.street}
        value={path.street}
        setValue={value => setFieldValue('address.street', value)}
        setTouched={() => setFieldTouched('address.street')}
        touched={touched.address?.street}
        formSubmitted={formSubmitted}
      />

      <Input
        type="number"
        label="Número"
        placeholder="Digite o número"
        optional
        error={errors.address?.number}
        value={path.number}
        setValue={value => setFieldValue('address.number', value)}
        setTouched={() => setFieldTouched('address.number')}
        touched={touched.address?.number}
        formSubmitted={formSubmitted}
      />

      <Select
        placeholder="Selecione o cidade"
        options={cities}
        label="Cidade"
        multiple={false}
        error={errors.address?.city?._id}
        selected={path.city}
        setSelected={value => setFieldValue('address.city', value)}
        setTouched={() => setFieldTouched('address.city')}
        touched={touched.address?.city}
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
        error={errors.address?.neighborhood?._id}
        selected={path.neighborhood}
        setSelected={value => setFieldValue('address.neighborhood', value)}
        setTouched={() => setFieldTouched('address.neighborhood')}
        touched={touched.address?.neighborhood}
        formSubmitted={formSubmitted}
      />
    </Card>
  );
}
