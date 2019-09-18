import React from 'react';
import PropTypes from 'prop-types';
import MaterialCheckbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { Container } from './styles';

const Checkbox = ({ checked, onChange, value, label }) => {
  return (
    <Container>
      <FormControlLabel
        control={
          <MaterialCheckbox
            checked={checked}
            onChange={() => onChange(value)}
            value={value}
          />
        }
        label={label}
        labelPlacement="end"
      />
    </Container>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.shape(),
  ]).isRequired,
  label: PropTypes.string.isRequired,
};

export default Checkbox;
