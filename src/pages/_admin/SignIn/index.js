import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';

import box from '~/assets/box.png';

import { Container, SubmitButton } from './styles';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();

  return (
    <Container>
      <div>
        <h1>portal</h1>
        <img src={box} alt="logo_portalbox" />
      </div>
      <Form onSubmit={data => dispatch(signInRequest(data))}>
        <Input
          type="text"
          name="username"
          label="Usuário"
          placeholder="Digite seu usuário"
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
