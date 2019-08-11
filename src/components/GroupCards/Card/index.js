import React from 'react';
import PropTypes from 'prop-types';

import { Container, Image } from './styles';

export default function Card({ title, image }) {
  return (
    <Container>
      <Image source={image} />
      <h3>{title}</h3>
    </Container>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
