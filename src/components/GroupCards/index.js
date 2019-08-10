import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

import { Container } from './styles';
import SliderArrow from '~/components/SliderArrow';
import Card from './Card';

export default function GroupCards({ title, style, list }) {
  const settings = {
    infinite: false,
    dots: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    nextArrow: <SliderArrow next />,
    prevArrow: <SliderArrow prev />,
  };

  return (
    <Container style={style}>
      <h1>{title}</h1>

      <Slider {...settings}>
        {list.map(card => (
          <Card {...card} />
        ))}
      </Slider>
    </Container>
  );
}

GroupCards.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.shape,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

GroupCards.defaultProps = {
  style: {},
};
