import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';

import { Container, ButtonToggle, Buttons } from './styles';

export default function Toggle({ options, name, label, value }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [selected, setSelected] = useState(defaultValue || value);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'dataset.selected',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <Buttons>
        {options.map(option => (
          <ButtonToggle
            key={option.value}
            active={option.value === selected}
            text={option.name}
            type="button"
            onClick={() => setSelected(option.value)}
          />
        ))}
      </Buttons>

      <input type="text" data-selected={selected} ref={ref} />
      {error && <span>{error}</span>}
    </Container>
  );
}

Toggle.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      name: PropTypes.string,
    })
  ).isRequired,
  value: PropTypes.number,
};

Toggle.defaultProps = {
  value: undefined,
};
