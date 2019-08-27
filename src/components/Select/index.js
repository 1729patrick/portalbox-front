/* eslint-disable  */
import React, { useRef, useEffect, useMemo } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

import { useField } from '@rocketseat/unform';

import styles, { Label, Container, GroupLabel } from './styles';

export default function ReactSelect({
  name,
  label,
  options,
  multiple,
  optional,
  groupedData,
  keys,
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

  const data = useMemo(() => {
    if (!groupedData) {
      return options.map(({ _id, name }) => ({ id: _id, name }));
    }

    return options.map(option => ({
      label: option[keys.label],
      options: option[keys.options].map(({ _id, name }) => ({ id: _id, name })),
    }));
  }, [groupedData, keys, options]);

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

    if (groupedData) {
      return data
        .map(opt => opt.options.find(option => option.id == defaultValue))
        .filter(option => option)[0];
    }

    if (!multiple) {
      return data.find(option => option.id == defaultValue);
    }

    return data.filter(option => defaultValue.includes(option.id));
  }

  const formatGroupLabel = data => (
    <GroupLabel>
      <p>{data.label}</p>
      <span>{data.options.length}</span>
    </GroupLabel>
  );

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
        options={data}
        isMulti={multiple}
        defaultValue={getDefaultValue()}
        ref={ref}
        getOptionValue={option => option.id}
        getOptionLabel={option => option.name}
        formatGroupLabel={formatGroupLabel}
        noOptionsMessage={()=> 'Nenhuma opção'}
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
