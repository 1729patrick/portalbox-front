import React, { useRef, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';

import {
  Container,
  Preview,
  ImageIcon,
  SliderWrapper,
  Description,
} from './styles';

import { images } from '~/services/fakeData';

export default function ImagesSlider({ initialSlide }) {
  const [activeSlide, setActiveSlide] = useState(initialSlide);

  const imageActive = useMemo(() => images[activeSlide], [activeSlide]);

  const imageIndicator = useMemo(
    () => `${activeSlide + 1} / ${images.length}`,
    [activeSlide]
  );

  const settings = {
    centerMode: true,
    centerPadding: '30px',
    slidesToShow: 3,
    speed: 300,
    focusOnSelect: true,
    arrows: false,
    initialSlide,
    beforeChange: (_, next) => setActiveSlide(next),
  };

  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <Container>
      <FiX color="#666" size={45} />

      <Preview source={imageActive.source}>
        <FiChevronLeft size={60} color="#666" onClick={previous} />
        <div />
        <FiChevronRight size={60} color="#666" onClick={next} />
      </Preview>

      <SliderWrapper>
        <Slider {...settings} ref={sliderRef}>
          {images.map(img => (
            <ImageIcon source={img.source} key={img}>
              <div />
            </ImageIcon>
          ))}
        </Slider>

        <Description>
          <p>{imageIndicator}</p>
          <h6>{imageActive.description}</h6>
        </Description>
      </SliderWrapper>
    </Container>
  );
}

ImagesSlider.propTypes = {
  initialSlide: PropTypes.number,
};

ImagesSlider.defaultProps = {
  initialSlide: 0,
};
