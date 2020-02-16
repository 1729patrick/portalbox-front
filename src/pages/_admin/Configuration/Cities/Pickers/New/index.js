import React, { useMemo, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FiX } from 'react-icons/fi';

import { Container, Neighborhoods } from './styles';

import Input from '~/components/Input';

import Picker from '~/components/_admin/Picker';

export default function New({
  onClose,
  onConfirm,
  open,
  values,
  setFieldValue,
  valuesForm,
  setValues,
  pickerType,
  errors,
  isValid,
  touched,
  setFieldError,
}) {
  const title = useMemo(() => {
    if (pickerType === 'new') {
      return 'Nova cidade';
    }

    return 'Editar cidade';
  }, [pickerType]);

  const addNeighborhod = useCallback(
    () =>
      setFieldValue('neighborhoods', [...values.neighborhoods, { name: '' }]),
    [setFieldValue, values.neighborhoods]
  );

  useEffect(() => {
    setValues(valuesForm);
  }, [valuesForm, setValues]);

  useEffect(() => {
    if (!values.neighborhoods.length) addNeighborhod();
  }, [addNeighborhod, values.neighborhoods]);

  const handleValueChange = (index, value) => {
    setFieldValue(
      'neighborhoods',
      values.neighborhoods.map((neighborhood, i) =>
        i === index ? { ...neighborhood, name: value } : neighborhood
      )
    );
  };

  const removeNeighborhod = index => {
    const neighborhoods = values.neighborhoods.filter((_, i) => i !== index);

    setFieldValue('neighborhoods', neighborhoods);
  };

  if (!open) return null;

  const getError = (field, index) => {
    const { neighborhoods } = errors;

    if (field === 'neighborhoods' && typeof neighborhoods === 'string') {
      return neighborhoods;
    }

    return neighborhoods && neighborhoods[index]
      ? neighborhoods[index][field]
      : null;
  };

  const getTouched = ({ index, field }) => {
    if (pickerType === 'edit') return true;

    const { name, neighborhoods } = touched;

    if (!index) return name;

    return neighborhoods && neighborhoods[index]
      ? neighborhoods[index][field]
      : null;
  };

  return (
    <Picker
      title={title}
      onClose={onClose}
      onConfirm={() => onConfirm({ values, setFieldError })}
      disabledConfirm={!isValid}
    >
      <Container>
        <Input
          label="Cidade"
          placeholder="Digite o nome da cidade"
          value={values.name}
          error={errors.name}
          setValue={value => setFieldValue('name', value)}
          touched={getTouched({ field: 'name' })}
        />

        <Neighborhoods>
          <span>
            <label>Bairros</label>

            <p>{getError('neighborhoods')}</p>
          </span>

          {values.neighborhoods.map((neighborhood, index) => (
            <div key={String(index)}>
              <Input
                placeholder="Digite o nome do bairro"
                value={neighborhood.name}
                setValue={value => handleValueChange(index, value)}
                error={getError('name', index)}
                touched={getTouched({ index, field: 'name' })}
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
  onConfirm: PropTypes.func.isRequired,
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
  setFieldError: PropTypes.func.isRequired,
  valuesForm: PropTypes.shape({
    name: PropTypes.string,
    neighborhoods: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
  }),
  setValues: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
    neighborhoods: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
        })
      ),
    ]),
  }).isRequired,
  isValid: PropTypes.bool.isRequired,
  touched: PropTypes.shape({
    name: PropTypes.bool,
    neighborhoods: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.bool,
      })
    ),
  }).isRequired,
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
