import React, { useRef, useEffect, useState } from 'react';
import { useField } from '@rocketseat/unform';
import MaterialRadio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { IoMdClose } from 'react-icons/io';

import { Container, Label, Options } from './styles';

const CustomRadio = withStyles({
  root: {
    color: '#444',
    '&$checked': {
      color: 'rgb(239, 108, 0)',
    },
  },
  checked: {},
})(props => <MaterialRadio {...props} />);

export default function Radio({ name, label, optional, options }) {
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
    <Container>
      <Label>
        {label && (
          <label htmlFor={fieldName}>
            {label}
            {optional && <span>(Opcional)</span>}
          </label>
        )}

        {error && <span>{error}</span>}
      </Label>

      <Options>
        {options.map(option => (
          <FormControlLabel
            key={option.label}
            value="start"
            control={
              <CustomRadio
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
        {optional && <p onClick={()=>setChecked(null)}>Limpar</p>}
      </Options>

      <input type="text" data-checked={checked} ref={ref} />
    </Container>
  );
}
