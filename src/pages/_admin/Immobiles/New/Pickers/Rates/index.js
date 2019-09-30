import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import Picker from '~/components/_admin/Picker';
import InputMask from '~/components/InputMask';

import { Container } from './styles';

export default function Rates({ onClose, open, values, setFieldValue }) {
  const path = useMemo(() => values.rates, [values.rates]);

  if (!open) return null;

  return (
    <Picker title="Adicionar taxas" onClose={onClose}>
      <Container>
        <div>
          <InputMask
            label="Condomínio"
            placeholder="Digite o valor do condominio"
            value={path.condominium}
            setValue={value => setFieldValue('rates.condominium', value)}
          />
        </div>
        <div>
          <InputMask
            label="IPTU"
            placeholder="Digite o valor do IPTU"
            value={path.iptu}
            setValue={value => setFieldValue('rates.iptu', value)}
          />
        </div>
        <div>
          <InputMask
            label="Seguro de incêndio"
            placeholder="Digite o valor do seguro de incêndio"
            value={path.fireInsurance}
            setValue={value => setFieldValue('rates.fireInsurance', value)}
          />
        </div>
      </Container>
    </Picker>
  );
}

Rates.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  values: PropTypes.shape().isRequired,
  setFieldValue: PropTypes.func.isRequired,
};
