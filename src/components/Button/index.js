import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({ text, ...rest }) {
  return <Container {...rest}>{text}</Container>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};
