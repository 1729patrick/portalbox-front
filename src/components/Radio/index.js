import React from 'react';
import PropTypes from 'prop-types';
import MaterialRadio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { Options, Clear } from './styles';
import FieldLayout from '~/components/_layouts/Field';

export default function Radio({
  label,
  optional,
  showClear,
  options,
  setChecked,
  checked,
  error,
}) {
  return (
    <FieldLayout
      label={label}
      optional={optional}
      error={error}
      showClear={showClear}
      onClear={() => setChecked(null)}
    >
      <Options>
        {options.map(option => (
          <FormControlLabel
            key={option.label}
            value="start"
            control={
              <MaterialRadio
                // eslint-disable-next-line eqeqeq
                checked={checked == option.value}
                onChange={e => setChecked(option.value)}
                value={option.value}
              />
            }
            label={option.label}
            labelPlacement="end"
          />
        ))}

        {optional && <Clear onClick={() => setChecked(null)}>Limpar</Clear>}
      </Options>
    </FieldLayout>
  );
}

Radio.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  optional: PropTypes.bool,
  showClear: PropTypes.bool,
  checked: PropTypes.number,
  setChecked: PropTypes.func.isRequired,
  error: PropTypes.string,
};

Radio.defaultProps = {
  error: '',
  optional: false,
  showClear: false,
  checked: null,
};
