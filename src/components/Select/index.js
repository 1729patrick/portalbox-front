import React, { useRef, useEffect, useMemo } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

import { useField } from '@rocketseat/unform';

import styles, { Label, Container } from './styles';

export default function ReactSelect({
  name,
  label,
  options,
  multiple,
  optional,
  ...rest
}) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const parseSelectValue = useMemo(() => {
    return selectValue => {
      if (!multiple) {
        return selectValue ? selectValue.id : '';
      }

      return selectValue ? selectValue.map(option => option.id) : [];
    };
  }, [multiple]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'state.value',
      parseValue: parseSelectValue,
      clearValue: selectRef => {
        selectRef.select.clearValue();
      },
    });
  }, [fieldName, parseSelectValue, registerField]);

  function getDefaultValue() {
    if (!defaultValue) return null;

    if (!multiple) {
      return options.find(option => option.id == defaultValue);
    }

    return options.filter(option => defaultValue.includes(option.id));
  }
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

      <Select
        styles={styles}
        name={fieldName}
        aria-label={fieldName}
        options={options}
        isMulti={multiple}
        defaultValue={getDefaultValue()}
        ref={ref}
        getOptionValue={option => option._id}
        getOptionLabel={option => option.name}
        {...rest}
      />
    </Container>
  );
}

ReactSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      name: PropTypes.string,
    })
  ).isRequired,
  multiple: PropTypes.bool,
  optional: PropTypes.bool,
};

ReactSelect.defaultProps = {
  multiple: false,
  optional: false,
};
