import React from 'react';

import Picker from '..';

import { Container, InputMask } from './styles';

export default function Rates({ onClose, open, initialData, onSave, path }) {
  console.log(path);
  return (
    <Picker
      title="Adicionar taxas"
      onClose={onClose}
      open={open}
      initialData={initialData}
      onSave={onSave}
      path={path}
    >
      <Container>
        <InputMask
          name="condominium"
          label="Condomínio"
          placeholder="Digite o valor do condominio"
        />
        <InputMask
          name="iptu"
          label="IPTU"
          placeholder="Digite o valor do IPTU"
        />
        <InputMask
          name="fireInsurance"
          label="Seguro de incêndio"
          placeholder="Digite o valor do seguro de incêndio"
        />
      </Container>
    </Picker>
  );
}
