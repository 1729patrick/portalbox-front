import React, { useRef, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import {
  Container,
  Preview,
  ImageIcon,
  SliderWrapper,
  Description,
} from './styles';

export default function ImagesSlider({ initialImage, images }) {
  const [activeImage, setActiveImage] = useState(initialImage);

  console.log(images);
  const imageActive = useMemo(() => images[activeImage], [activeImage, images]);

  const imageIndicator = useMemo(
    () => `${activeImage + 1} / ${images.length}`,
    [activeImage, images.length]
  );

  const settings = {
    centerMode: true,
    centerPadding: '30px',
    slidesToShow: images.length < 3 ? images.length : 3,
    speed: 300,
    focusOnSelect: true,
    arrows: false,
    initialSlide: initialImage,
    beforeChange: (_, next) => setActiveImage(next),
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
      <Preview source={imageActive.file}>
        <FiChevronLeft size={60} color="#666" onClick={previous} />
        <div />
        <FiChevronRight size={60} color="#666" onClick={next} />
      </Preview>

      <SliderWrapper>
        <Slider {...settings} ref={sliderRef}>
          {images.map(img => (
            <ImageIcon source={img.file} key={img._id}>
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
  initialImage: PropTypes.number,
};

ImagesSlider.defaultProps = {
  initialImage: 0,
};
