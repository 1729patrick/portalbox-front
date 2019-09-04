import React from 'react';
import { Form, Scope } from '@rocketseat/unform';
import { FiX } from 'react-icons/fi';

import {
  Container,
  Content,
  SubmitButtonWrapper,
  SubmitButton,
} from './styles';

export default function Picker({
  onClose,
  title,
  children,
  open,
  initialData,
  onSave,
  path,
}) {
  if (!open) return null;

  return (
    <Container>
      <header>
        <h1>{title}</h1>

        <FiX color="#666" size={30} onClick={onClose} />
      </header>

      <Form initialData={initialData} onSubmit={onSave}>
        <Scope path={path}>
          <Content>{children}</Content>

          <SubmitButtonWrapper>
            <SubmitButton text="Confirmar" type="submit" />
          </SubmitButtonWrapper>
        </Scope>
      </Form>
    </Container>
  );
}
