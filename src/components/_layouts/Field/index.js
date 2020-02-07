import React from 'react';
import PropTypes from 'prop-types';

import { Container, Label, Clear } from './styles';

const FieldLayout = ({
  children,
  label,
  optional,
  error,
  showClear,
  onClear,
  value,
}) => {
  return (
    <Container>
      {(label || showClear || error) && (
        <Label>
          {label && (
            <label>
              {label}
              {optional && <span>(Opcional)</span>}
            </label>
          )}

          {showClear && value && <Clear onClick={onClear}>Limpar</Clear>}

          {error && <span>{error}</span>}
        </Label>
      )}

      {children}
    </Container>
  );
};

FieldLayout.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  optional: PropTypes.bool,
  error: PropTypes.string,
  showClear: PropTypes.bool,
  onClear: PropTypes.func,
  value: PropTypes.any,
};

FieldLayout.defaultProps = {
  optional: false,
  error: '',
  label: '',
  showClear: false,
  onClear: () => {},
  value: null,
};
export default FieldLayout;
