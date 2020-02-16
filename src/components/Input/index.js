/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import { DefaultInput, TextArea } from './styles';

import FieldLayout from '~/components/_layouts/Field';

const Input = ({
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
}) => {
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
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  optional: PropTypes.bool,
  error: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any,
  textarea: PropTypes.bool,
  setTouched: PropTypes.func,
  touched: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  formSubmitted: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

Input.defaultProps = {
  error: '',
  value: '',
  textarea: false,
  setTouched: () => {},
  touched: false,
  formSubmitted: false,
  disabled: false,
  optional: false,
  type: 'text',
};

export default Input;
