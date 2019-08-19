import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import box from '~/assets/box.png';

import { Container, SubmitButton } from './styles';

export default function SignIn() {
  return (
    <Container>
      <div>
        <h1>portal</h1>
        <img src={box} alt="" />
      </div>
      <Form>
        <Input
          type="text"
          name="email"
          label="E-mail"
          placeholder="Digite seu e-mail"
        />
        <Input
          type="password"
          name="password"
          label="Senha"
          placeholder="Digite sua senha"
        />

        <SubmitButton text="Acessar"> </SubmitButton>
      </Form>
    </Container>
  );
}
