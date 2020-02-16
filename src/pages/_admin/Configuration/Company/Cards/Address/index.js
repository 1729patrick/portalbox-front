import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Card from '~/components/_admin/Card';

import Select from '~/components/Select';
import Input from '~/components/Input';

const Address = ({
  values,
  setFieldValue,
  errors,
  setFieldTouched,
  touched,
  formSubmitted,
}) => {
  const cities = useSelector(state => state.core.cities);

  useEffect(() => {
    const city = cities.find(c => c._id === values.address?.city?._id);
    setFieldValue('address.city', city);
  }, [cities, setFieldValue, values.address]);

  const handleNeighborhoodSelected = value => {
    if (!values.address?.city) {
      const city = cities.find(c =>
        c.neighborhoods.find(neighborhood => neighborhood._id === value._id)
      );

      setFieldValue('address.city', city);
    }

    setFieldValue('address.neighborhood', value);
  };

  const handleCitySelected = (value = {}) => {
    if (values.address?.city === value) {
      return;
    }

    setFieldTouched('address.neighborhood');
    setFieldValue('address.city', value);
    setFieldValue('address.neighborhood', null);
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
        error={errors.address?.street}
        value={values.address?.street}
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
        value={values.address?.number}
        setValue={value => setFieldValue('address.number', value)}
        setTouched={() => setFieldTouched('address.number')}
        touched={touched.address?.number}
        formSubmitted={formSubmitted}
      />
      <Input
        type="text"
        label="CEP"
        placeholder="Digite o CEP"
        error={errors.address?.cep}
        value={values.address?.cep}
        setValue={value => setFieldValue('address.cep', value)}
        setTouched={() => setFieldTouched('address.cep')}
        touched={touched.address?.cep}
        formSubmitted={formSubmitted}
      />
      <Select
        placeholder="Selecione o cidade"
        options={cities}
        label="Cidade"
        multiple={false}
        error={errors.address?.city?._id}
        selected={values.address?.city}
        setSelected={handleCitySelected}
        setTouched={() => setFieldTouched('address.city')}
        touched={touched.address?.city}
        formSubmitted={formSubmitted}
      />

      <Select
        placeholder="Selecione o bairro"
        options={values.address?.city ? [values.address?.city] : cities}
        label="Bairro"
        multiple={false}
        groupedData
        keys={{
          label: 'name',
          options: 'neighborhoods',
          option: 'name',
          value: '_id',
        }}
        error={errors.address?.neighborhood}
        selected={values.address?.neighborhood}
        setSelected={handleNeighborhoodSelected}
        setTouched={() => setFieldTouched('address.neighborhood')}
        touched={touched.address?.neighborhood}
        formSubmitted={formSubmitted}
      />
    </Card>
  );
};

Address.propTypes = {
  values: PropTypes.shape({
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      number: PropTypes.oneOfType([() => null, PropTypes.number]),
      city: PropTypes.shape({ _id: PropTypes.string.isRequired }),
      neighborhood: PropTypes.oneOfType([
        () => null,
        PropTypes.shape({ _id: PropTypes.string }),
      ]),
    }),
  }).isRequired,
  setFieldValue: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    address: PropTypes.shape({
      street: PropTypes.string,
      number: PropTypes.string,
      city: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({ _id: PropTypes.string }),
      ]),
      neighborhood: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({ _id: PropTypes.string }),
      ]),
    }),
  }).isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  touched: PropTypes.shape({
    address: PropTypes.shape({
      street: PropTypes.bool,
      number: PropTypes.bool,
      city: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
      neighborhood: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    }),
  }).isRequired,
  formSubmitted: PropTypes.bool.isRequired,
};

export default Address;
