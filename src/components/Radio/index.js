import React from 'react';
import MaterialRadio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { Options, Clear } from './styles';
import FieldLayout from '~/components/_layouts/Field';

export default function Radio({
  label,
  optional,
  setValue,
  options,
  value,
  error,
}) {
  return (
    <FieldLayout label={label} optional={optional} error={error}>
      <Options>
        {options.map(option => (
          <FormControlLabel
            key={option.label}
            value="start"
            control={
              <MaterialRadio
                // eslint-disable-next-line eqeqeq
                checked={value == option.value}
                onChange={e => setValue(e.target.value)}
                value={option.value}
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'C' }}
              />
            }
            label={option.label}
            labelPlacement="end"
          />
        ))}

        {optional && <Clear onClick={() => setValue(null)}>Limpar</Clear>}
      </Options>
    </FieldLayout>
  );
}
