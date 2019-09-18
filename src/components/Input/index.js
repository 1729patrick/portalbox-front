import React from 'react';

import { DefaultInput } from './styles';

import FieldLayout from '~/components/_layouts/Field';

export default function Input({
  label,
  optional,
  error,
  value,
  setValue,
  ...rest
}) {
  return (
    <FieldLayout label={label} optional={optional} error={error}>
      <DefaultInput
        {...rest}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </FieldLayout>
  );
}
