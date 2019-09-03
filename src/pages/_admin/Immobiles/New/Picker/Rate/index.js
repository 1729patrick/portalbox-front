import React from 'react';
import { Form } from '@rocketseat/unform';

import Input from '~/components/Input';

import Picker from '..';

export default function Rate({ onClose, open }) {
  return (
    <Picker title="Adicionar taxas" onClose={onClose} open={open}>
      <Form>
        <Input
          type="text"
          name="street"
          label="Condominio"
          placeholder="Digite o valor do condominio"
        />
        <Input
          type="text"
          name="street"
          label="IPTU"
          placeholder="Digite o valor do IPTU"
        />
        <Input
          type="text"
          name="street"
          label="Seguro de incendio"
          placeholder="Digite o valor do seguro de incendio"
        />
      </Form>
    </Picker>
  );
}
