import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({ text, ...rest }) {
  return <Container {...rest}>{text}</Container>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
