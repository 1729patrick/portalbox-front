import React from 'react';
import PropTypes from 'prop-types';

import { Container, Image } from './styles';

export default function Card({ text, image }) {
  return (
    <Container>
      <Image source={image} />
      <h3>{text}</h3>
    </Container>
  );
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
