import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import Slider from '~/components/Slider';
import Card from './Card';

export default function GroupCards({ title, style, list, onClick, ...r }) {
  return (
    <Container style={style}>
      <h1>{title}</h1>

      <Slider>
        {list.map(card => (
          <Card key={card._id} {...card} onClick={() => onClick(card)} />
        ))}
      </Slider>
    </Container>
  );
}

GroupCards.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.shape(),
  onClick: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

GroupCards.defaultProps = {
  style: {},
};
