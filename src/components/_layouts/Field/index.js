import React from 'react';
import PropTypes from 'prop-types';

import { Container, Label, Clear } from './styles';

const Field = ({ children, label, optional, error, showClear, onClear }) => {
  return (
    <Container>
      <Label>
        {label && (
          <label>
            {label}
            {optional && <span>(Opcional)</span>}
          </label>
        )}

        {showClear && <Clear onClick={onClear}>Limpar</Clear>}

        {error && <span>{error}</span>}
      </Label>

      {children}
    </Container>
  );
};

Field.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  optional: PropTypes.bool,
  error: PropTypes.string,
  showClear: PropTypes.bool,
  onClear: PropTypes.func,
};

Field.defaultProps = {
  optional: false,
  error: '',
  label: '',
  showClear: false,
  onClear: () => console.log('limpou'),
};
export default Field;
