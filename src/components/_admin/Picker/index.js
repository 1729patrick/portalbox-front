import React from 'react';
import { FiX } from 'react-icons/fi';

import {
  Container,
  Content,
  SubmitButtonWrapper,
  SubmitButton,
} from './styles';

export default function Picker({
  onClose,
  onConfirm,
  title,
  children,
  disabledConfirm,
}) {
  return (
    <Container>
      <header>
        <h1>{title}</h1>

        <FiX color="#222" size={30} onClick={onClose} />
      </header>

      <Content>{children}</Content>

      <SubmitButtonWrapper>
        <SubmitButton
          disabled={disabledConfirm}
          text="Confirmar"
          type="submit"
          onClick={onConfirm || onClose}
        />
      </SubmitButtonWrapper>
    </Container>
  );
}
