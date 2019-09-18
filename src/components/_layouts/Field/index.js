import React from 'react';

import { Container, Label } from './styles';

const Field = ({ children, label, optional, error }) => {
  return (
    <Container>
      <Label>
        {label && (
          <label>
            {label}
            {optional && <span>(Opcional)</span>}
          </label>
        )}

        {error && <span>{error}</span>}
      </Label>

      {children}
    </Container>
  );
};

export default Field;
