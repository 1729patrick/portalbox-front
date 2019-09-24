import React, { useMemo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FiX } from 'react-icons/fi';

import { Container, Neighborhoods } from './styles';

import Input from '~/components/Input';

import Picker from '~/components/_admin/Picker';

export default function New({ onClose, open, values, setFieldValue }) {
  const [neighborhoods, setNeighborhoods] = useState(['']);

  useEffect(() => setFieldValue('neighborhoods', neighborhoods), [
    neighborhoods,
    setFieldValue,
  ]);

  const handleValueChange = (index, value) => {
    setNeighborhoods(
      neighborhoods.map((neighborhood, i) =>
        i === index ? value : neighborhood
      )
    );
  };

  const removeNeighborhods = index => {
    setNeighborhoods(neighborhoods.filter((_, i) => i !== index));
  };

  const path = useMemo(() => values.rates, [values.rates]);

  if (!open) return null;

  return (
    <Picker title="Nova Cidade" onClose={onClose} path={path}>
      <Container>
        <Input
          label="Cidade"
          placeholder="Digite o nome da cidade"
          value={values.name}
          setValue={value => setFieldValue('name', value)}
        />

        <Neighborhoods>
          <label>Bairros</label>
          {neighborhoods.map((neighborhood, index) => (
            <div key={index}>
              <Input
                placeholder="Digite o nome do bairro"
                value={neighborhood}
                setValue={value => handleValueChange(index, value)}
              />
              <button type="button">
                <FiX
                  color="#666"
                  size={25}
                  onClick={() => removeNeighborhods(index)}
                />
              </button>
            </div>
          ))}
        </Neighborhoods>

        <button
          type="button"
          onClick={() => setNeighborhoods([...neighborhoods, ''])}
        >
          <p>+ Adicionar bairro</p>
        </button>
      </Container>
    </Picker>
  );
}

New.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  values: PropTypes.shape().isRequired,
  setFieldValue: PropTypes.func.isRequired,
};
