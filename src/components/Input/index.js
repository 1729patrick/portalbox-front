import React, { useRef, useEffect, useState } from 'react';
import { useField } from '@rocketseat/unform';

import { Container, DefaultInput, Label } from './styles';

export default function Input({ name, label, optional, ...rest }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [value, setValue] = useState(defaultValue || '');

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'dataset.value',
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <Container>
      <Label>
        <label>
          {label}
          {optional && <span>(Opcional)</span>}
        </label>

        {error && <span>{error}</span>}
      </Label>

      <DefaultInput
        {...rest}
        value={value}
        onChange={e => setValue(e.target.value)}
        ref={ref}
        data-value={value}
      />
    </Container>
  );
}
