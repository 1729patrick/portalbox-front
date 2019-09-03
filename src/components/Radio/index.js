import React, { useRef, useEffect, useState } from 'react';
import { useField } from '@rocketseat/unform';
import MaterialRadio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { Container, Label, Options, Clear } from './styles';

const CustomRadio = withStyles({
  root: {
    color: '#333',
    '&$checked': {
      color: 'rgb(239, 108, 0)',
    },
  },
  checked: {},
})(props => <MaterialRadio {...props} />);

export default function Radio({
  name,
  label,
  optional,
  options,
  showClear,
  style,
}) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [checked, setChecked] = useState(defaultValue || '');

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'dataset.checked',
    });
  }, [fieldName, registerField]);

  return (
    <Container style={style}>
      <Label>
        {label && (
          <label htmlFor={fieldName}>
            {label}
            {optional && <span>(Opcional)</span>}
          </label>
        )}

        {showClear && <Clear onClick={() => setChecked(null)}>Limpar</Clear>}
        {error && <span>{error}</span>}
      </Label>

      <Options>
        {options.map(option => (
          <FormControlLabel
            key={option.label}
            value="start"
            control={
              <CustomRadio
                // eslint-disable-next-line eqeqeq
                checked={checked == option.value}
                onChange={e => setChecked(e.target.value)}
                value={option.value}
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'C' }}
              />
            }
            label={option.label}
            labelPlacement="end"
          />
        ))}

        {optional && <Clear onClick={() => setChecked(null)}>Limpar</Clear>}
      </Options>

      <input type="text" data-checked={checked} ref={ref} />
    </Container>
  );
}
