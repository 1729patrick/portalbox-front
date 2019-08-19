import React from 'react';

import { DefaultInput, Label } from './styles';

export default function Input({ label, optional, ...rest }) {
  return (
    <>
      <Label>
        {label}
        {optional && <span>(Opcional)</span>}
      </Label>
      <DefaultInput {...rest} />
    </>
  );
}
