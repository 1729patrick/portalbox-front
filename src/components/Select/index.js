/* eslint-disable  */
import React, { useRef, useEffect, useMemo } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

import styles, { Label, Container, GroupLabel } from './styles';

export default function ReactSelect({
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
    <Container>
      <Label>
        {label && (
          <label>
            {label}
            {optional && <span>(Opcional)</span>}
          </label>
        )}

        {/* {error && <span>{error}</span>} */}
      </Label>

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
    </Container>
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
