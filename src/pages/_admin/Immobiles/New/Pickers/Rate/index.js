import React from 'react';
import { Form } from '@rocketseat/unform';

import { FiX } from 'react-icons/fi';

import Input from '~/components/Input';
import { Container, Content, SubmitButton } from './styles';

export default function Rate({ onClose }) {
  return (
    <Container>
      <header>
        <h1>Adicionar taxas</h1>

        <FiX color="#666" size={30} onClick={onClose} />
      </header>
      <Content>
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

          <SubmitButton text="Confirmar" type="button" />
        </Form>
      </Content>
    </Container>
  );
}
