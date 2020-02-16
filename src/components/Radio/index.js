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
  setTouched,
  touched,
  formSubmitted,
}) {
  return (
    <FieldLayout
      label={label}
      value={checked}
      optional={optional}
      error={error}
      showClear={showClear}
      onClear={() => setChecked(null)}
      touched={touched}
      formSubmitted={formSubmitted}
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
                onChange={() => setChecked(option.value)}
                value={option.value}
                onBlur={setTouched}
              />
            }
            label={option.label}
            labelPlacement="end"
          />
        ))}

        {optional && checked ? (
          <Clear onClick={() => setChecked(null)}>Limpar</Clear>
        ) : null}
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
  setTouched: PropTypes.func,
  touched: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  formSubmitted: PropTypes.bool,
};

Radio.defaultProps = {
  error: '',
  optional: false,
  showClear: false,
  checked: null,
  setTouched: () => {},
  touched: false,
  formSubmitted: false,
};
