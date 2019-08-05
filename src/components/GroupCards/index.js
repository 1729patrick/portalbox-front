import React from 'react';
import Slider from 'react-slick';

import { Container } from './styles';
import SliderArrow from '~/components/SliderArrow';
import Card from './Card';

export default function GroupCards({ title, style }) {
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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Slider>
    </Container>
  );
}
