import React from 'react';
import PropTypes from 'prop-types';

import { Container, Button } from './styles';

export default function ImageBackground({
  text,
  textButton,
  contranstLight,
  ...rest
}) {
  return (
    <Container {...rest} contranstLight={contranstLight}>
      <h1>{text}</h1>

      {textButton && (
        <Button text={textButton} contranstLight={contranstLight} />
      )}
    </Container>
  );
}

ImageBackground.propTypes = {
  text: PropTypes.string.isRequired,
  textButton: PropTypes.string,
  contranstLight: PropTypes.bool,
  style: PropTypes.shape,
};

ImageBackground.defaultProps = {
  textButton: '',
  contranstLight: false,
  style: {},
};
