import React, { useMemo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FiX } from 'react-icons/fi';

import { Container, Neighborhoods } from './styles';

import Input from '~/components/Input';

import Picker from '~/components/_admin/Picker';

export default function New({
  onClose,
  open,
  values,
  setFieldValue,
  valuesForm,
  setValues,
  pickerType,
}) {
  const title = useMemo(() => {
    if (pickerType === 'new') {
      return 'Nova cidade';
    }

    return values.name ? values.name : 'Editar cidade';
  }, [pickerType, values.name]);
  useEffect(() => {
    setValues(valuesForm);
  }, [valuesForm, setValues]);

  const handleValueChange = (index, value) => {
    setFieldValue(
      'neighborhoods',
      values.neighborhoods.map((neighborhood, i) =>
        i === index ? { ...neighborhood, name: value } : neighborhood
      )
    );
  };

  const removeNeighborhod = index =>
    setFieldValue(
      'neighborhoods',
      values.neighborhoods.filter((_, i) => i !== index)
    );

  const addNeighborhod = () =>
    setFieldValue('neighborhoods', [...values.neighborhoods, { name: '' }]);

  if (!open) return null;

  return (
    <Picker title={title} onClose={onClose}>
      <Container>
        <Input
          label="Cidade"
          placeholder="Digite o nome da cidade"
          value={values.name}
          setValue={value => setFieldValue('name', value)}
        />

        <Neighborhoods>
          <label>Bairros</label>
          {values.neighborhoods.map((neighborhood, index) => (
            <div key={index}>
              <Input
                placeholder="Digite o nome do bairro"
                value={neighborhood.name}
                setValue={value => handleValueChange(index, value)}
              />
              <button type="button">
                <FiX
                  color="#666"
                  size={25}
                  onClick={() => removeNeighborhod(index)}
                />
              </button>
            </div>
          ))}
        </Neighborhoods>

        <button type="button" onClick={addNeighborhod}>
          <p>+ Adicionar bairro</p>
        </button>
      </Container>
    </Picker>
  );
}

New.propTypes = {
  onClose: PropTypes.func.isRequired,
  pickerType: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  values: PropTypes.shape({
    name: PropTypes.string,
    neighborhoods: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
  }),
  setFieldValue: PropTypes.func.isRequired,
  valuesForm: PropTypes.shape({
    name: PropTypes.string,
    neighborhoods: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
  }),
  setValues: PropTypes.func.isRequired,
};

New.defaultProps = {
  values: {
    name: '',
    neighborhoods: [{ name: '' }],
  },
  valuesForm: {
    name: '',
    neighborhoods: [{ name: '' }],
  },
};
