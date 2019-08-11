import React from 'react';
import PropTypes from 'prop-types';

import { Container, Button } from './styles';

export default function ImageBackground({
  title,
  textButton,
  contranstLight,
  ...rest
}) {
  return (
    <Container {...rest} contranstLight={contranstLight}>
      <h1>{title}</h1>

      {textButton && (
        <Button text={textButton} contranstLight={contranstLight} />
      )}
    </Container>
  );
}

ImageBackground.propTypes = {
  title: PropTypes.string.isRequired,
  textButton: PropTypes.string,
  contranstLight: PropTypes.bool,
  style: PropTypes.shape(),
};

ImageBackground.defaultProps = {
  textButton: '',
  contranstLight: false,
  style: {},
};
