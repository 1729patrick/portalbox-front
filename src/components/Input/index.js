import React from 'react';

import { DefaultInput, TextArea } from './styles';

import FieldLayout from '~/components/_layouts/Field';

export default function Input({
  label,
  optional,
  error,
  value,
  setValue,
  textarea,
  setTouched,
  touched,
  formSubmitted,
  ...rest
}) {
  return (
    <FieldLayout
      label={label}
      value={value}
      optional={optional}
      error={error}
      touched={touched}
      formSubmitted={formSubmitted}
    >
      {textarea ? (
        <TextArea
          {...rest}
          value={value}
          onChange={e => setValue(e.target.value)}
          onBlur={setTouched}
        />
      ) : (
        <DefaultInput
          {...rest}
          value={value}
          onChange={e => setValue(e.target.value)}
          onBlur={setTouched}
        />
      )}
    </FieldLayout>
  );
}
