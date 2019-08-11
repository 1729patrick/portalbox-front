import React from 'react';
import PropTypes from 'prop-types';

import { Container, Triangle, Button } from './styles';

export default function VerticalBackground({ title, textButton, ...rest }) {
  return (
    <Container {...rest}>
      <Triangle>
        <h1>{title}</h1>
        {textButton && <Button text={textButton} />}
      </Triangle>
    </Container>
  );
}

VerticalBackground.propTypes = {
  title: PropTypes.string.isRequired,
  textButton: PropTypes.string,
  style: PropTypes.shape(),
};

VerticalBackground.defaultProps = {
  textButton: '',
  style: {},
};
