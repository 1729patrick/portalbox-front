/* eslint-disable  */
import React, { useRef, useEffect, useMemo } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

import FieldLayout from '~/components/_layouts/Field';
import styles, { GroupLabel } from './styles';

export default function ReactSelect({
  error,
  selected,
  setSelected,
  options,
  label,
  optional,
  groupedData,
  keys,
  ...rest
}) {
  const formatGroupLabel = data => (
    <GroupLabel>
      <p>{data.label}</p>
      <span>{data.options.length}</span>
    </GroupLabel>
  );

  const data = useMemo(() => {
    if (groupedData) {
      return options.map(option => ({
        label: option[keys.label],
        options: option[keys.options],
      }));
    }

    return options;
  }, [options]);

  return (
    <FieldLayout
      label={label}
      value={selected}
      optional={optional}
      error={error}
    >
      <Select
        styles={styles}
        name={name}
        value={selected}
        onChange={setSelected}
        options={data}
        getOptionValue={option => option._id}
        getOptionLabel={option => option.name}
        noOptionsMessage={() => 'Nenhuma opção'}
        formatGroupLabel={formatGroupLabel}
        {...rest}
      />
    </FieldLayout>
  );
}

// ReactSelect.propTypes = {
//   name: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   options: PropTypes.arrayOf(
//     PropTypes.shape({
//       value: PropTypes.number,
//       name: PropTypes.string,
//     })
//   ).isRequired,
//   multiple: PropTypes.bool,
//   optional: PropTypes.bool,
// };

// ReactSelect.defaultProps = {
//   multiple: false,
//   optional: false,
// };
