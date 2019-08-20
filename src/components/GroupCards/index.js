import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import Slider from '~/components/Slider';
import Card from './Card';

export default function GroupCards({ title, style, list }) {
  return (
    <Container style={style}>
      <h1>{title}</h1>

      <Slider>
        {list.map(card => (
          <Card key={card.id} {...card} />
        ))}
      </Slider>
    </Container>
  );
}

GroupCards.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.shape(),
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

GroupCards.defaultProps = {
  style: {},
};
