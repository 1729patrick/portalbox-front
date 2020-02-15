/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FiX } from 'react-icons/fi';

import Input from '~/components/Input';
import Select from '~/components/Select';

import { CardPhones, Phone } from './styles';
import { typesPhone } from '~/services/fakeData';

const Phones = ({
  values,
  setFieldValue,
  errors,
  setFieldTouched,
  touched,
  formSubmitted,
}) => {
  const [phones, setPhones] = useState(values.phones);

  useEffect(() => {
    setFieldValue('phones', phones);
  }, [phones, setFieldValue]);

  const addPhone = useCallback(
    ({
      type = { _id: 'whatsapp', name: 'WhatsApp' },
      number = '',
      description = '',
    }) => {
      setPhones(p => [
        ...p,
        {
          type,
          number,
          description,
        },
      ]);
    },
    []
  );

  useEffect(() => {
    if (values.phones.length === 0) addPhone({});
  }, [addPhone, values.phones.length]);

  const removePhone = index => {
    setPhones(phones.filter((_, i) => i !== index));
  };

  const handleValueChange = (index, field, value) => {
    setPhones(
      phones.map((p, i) => (i === index ? { ...p, [field]: value } : p))
    );
  };

  const getStatus = (list, index, field) => {
    if (!list.phones) {
      return null;
    }
    return list.phones[index] ? list.phones[index][field] : null;
  };

  const getError = () =>
    typeof errors.phones === 'string' ? errors.phones : '';

  return (
    <CardPhones>
      <div>
        <h1>Telefones</h1>

        <span>{getError()}</span>
      </div>

      {phones.map(({ type, number, description }, index) => (
        <Phone key={String(index)}>
          <Input
            type="number"
            placeholder="Número do telefone"
            value={number}
            setValue={value => handleValueChange(index, 'number', value)}
            error={getStatus(errors, index, 'number')}
            setTouched={() => {
              setFieldTouched(String(`phones[${index}].number`));
            }}
            touched
            formSubmitted={formSubmitted}
          />
          <Input
            type="text"
            placeholder="Descrição do telefone"
            value={description}
            setValue={value => handleValueChange(index, 'description', value)}
            error={getStatus(errors, index, 'description')}
            setTouched={() => {
              setFieldTouched(String(`phones[${index}].description`));
            }}
            touched
            formSubmitted={formSubmitted}
          />
          <Select
            placeholder="Tipo do telefone"
            selected={type}
            setSelected={selected => handleValueChange(index, 'type', selected)}
            options={typesPhone}
            error={getStatus(errors, index, 'type')}
            setTouched={() => {
              setFieldTouched(String(`phones[${index}].type`));
            }}
            touched
            formSubmitted={formSubmitted}
          />

          <button type="button">
            <FiX color="#666" size={25} onClick={() => removePhone(index)} />
            <span onClick={() => removePhone(index)}>Excluir</span>
          </button>
        </Phone>
      ))}

      <button type="button" onClick={() => addPhone({})}>
        + Adicionar telefone
      </button>
    </CardPhones>
  );
};

Phones.propTypes = {
  values: PropTypes.shape({
    phones: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.shape({
          _id: PropTypes.string,
          name: PropTypes.string,
        }),
        number: ({ number }, propName, componentName) => {
          if (+number >= 0) {
            return true;
          }

          return new Error(
            `Invalid prop ${propName} passed to ${componentName}. Expected a number and receive a isNaN.`
          );
        },
        description: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
  setFieldValue: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    phones: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string,
          number: PropTypes.string,
          description: PropTypes.string,
        })
      ),
    ]),
  }),
  setFieldTouched: PropTypes.func.isRequired,
  touched: PropTypes.shape({
    phones: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.bool,
        number: PropTypes.bool,
        description: PropTypes.bool,
      })
    ),
  }).isRequired,
  formSubmitted: PropTypes.bool.isRequired,
};

Phones.defaultProps = {
  errors: {
    phones: {
      type: '',
      number: '',
      description: '',
    },
  },
};

export default Phones;
