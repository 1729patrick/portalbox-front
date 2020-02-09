import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';

import { Container, SubmitButton } from './styles';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    setPassword('');
    dispatch(signInRequest({ username, password }));
  };

  return (
    <Container>
      <div>
        <h1>portalbox</h1>
      </div>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          name="username"
          label="Usuário"
          placeholder="Digite seu usuário"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <Input
          type="password"
          name="password"
          label="Senha"
          placeholder="Digite sua senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <SubmitButton
          type="submit"
          text="Acessar"
          disabled={!username || !password}
        />
      </Form>
    </Container>
  );
}
