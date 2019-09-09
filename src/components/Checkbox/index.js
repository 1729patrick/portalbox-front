import React from 'react';
import PropTypes from 'prop-types';
import MaterialCheckbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './styles';

const CustomCheckbox = withStyles(styles)(props => {
  return <MaterialCheckbox color="default" {...props} />;
});

const Checkbox = ({ checked, onChange, value, label }) => {
  return (
    <FormControlLabel
      control={
        <CustomCheckbox
          checked={checked}
          onChange={() => onChange(value)}
          value={value}
        />
      }
      label={label}
      labelPlacement="end"
    />
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
