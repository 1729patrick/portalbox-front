import React, { useState, useEffect, useCallback } from 'react';
import { FiX } from 'react-icons/fi';

import Card from '~/components/_admin/Card';
import Input from '~/components/Input';
import Select from '~/components/Select';

import { Phone } from './styles';
import { typesPhone } from '~/services/fakeData';

export default function Phones({ values, setFieldValue, errors }) {
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
      setPhones(phones => [
        ...phones,
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

  const setValue = (index, field, value) => {
    setPhones(
      phones.map((p, i) => {
        if (i === index) return { ...p, [field]: value };
        return p;
      })
    );
  };

  const getError = (index, field) => {
    if (!errors.phones) {
      return '';
    }
    return errors.phones[index] ? errors.phones[index][field] : '';
  };

  return (
    <Card>
      <div>
        <h1>Telefones</h1>
      </div>

      {phones.map(({ type, number, description }, index) => (
        <Phone key={index}>
          <Input
            type="number"
            placeholder="Número do telefone"
            value={number}
            setValue={value => setValue(index, 'number', value)}
            error={getError(index, 'number')}
          />
          <Input
            type="text"
            placeholder="Descrição do telefone"
            value={description}
            setValue={value => setValue(index, 'description', value)}
            error={getError(index, 'description')}
          />
          <Select
            placeholder="Tipo do telefone"
            selected={type}
            setSelected={selected => setValue(index, 'type', selected)}
            options={typesPhone}
            error={getError(index, 'type')}
          />

          <button type="button">
            <FiX color="#666" size={25} onClick={() => removePhone(index)} />
            <p onClick={() => removePhone(index)}>Excluir</p>
          </button>
        </Phone>
      ))}

      <button type="button" onClick={() => addPhone({})}>
        + Adicionar telefone
      </button>
    </Card>
  );
}
