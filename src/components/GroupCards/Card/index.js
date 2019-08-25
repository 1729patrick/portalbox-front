import React from 'react';
import PropTypes from 'prop-types';

import { Container, Image } from './styles';

export default function Card({ name, image }) {
  return (
    <Container>
      <Image source={image} />
      <h3>{name}</h3>
    </Container>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
