import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

import { Container } from './styles';
import SliderArrow from '~/components/SliderArrow';
import Card from './Card';

const settings = {
  infinite: false,
  dots: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  initialSlide: 0,
  nextArrow: <SliderArrow next />,
  prevArrow: <SliderArrow prev />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 470,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function GroupCards({ title, style, list }) {
  return (
    <Container style={style}>
      <h1>{title}</h1>

      <Slider {...settings}>
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
