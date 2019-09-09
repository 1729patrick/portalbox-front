import React from 'react';
import PropTypes from 'prop-types';

import { Container, ButtonToggle, Buttons, Label } from './styles';

export default function Toggle({
  options,
  label,
  optional,
  selected,
  setSelected,
}) {
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

      <Buttons>
        {options.map(option => (
          <ButtonToggle
            key={option.value}
            active={option.value === selected.value}
            text={option.title}
            type="button"
            onClick={() => setSelected(option)}
          />
        ))}
      </Buttons>
    </Container>
  );
}

Toggle.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
        PropTypes.shape(),
      ]).isRequired,
      title: PropTypes.string,
    })
  ).isRequired,
  optional: PropTypes.bool,
  selected: PropTypes.shape().isRequired,
  setSelected: PropTypes.func.isRequired,
};

Toggle.defaultProps = {
  label: '',
  optional: false,
};
