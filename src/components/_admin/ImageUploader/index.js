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
  SaveButton,
} from './styles';

import { images as x } from '~/services/fakeData';

export default function ImagesUploader({ initialImage }) {
  const [activeImage, setActiveImage] = useState(initialImage);

  const images = [{}];

  const imageActive = useMemo(() => images[activeImage], [activeImage, images]);

  const imageIndicator = useMemo(
    () => `${activeImage + 1} / ${images.length}`,
    [activeImage, images.length]
  );

  const settings = {
    centerMode: true,
    centerPadding: '30px',
    slidesToShow: 3,
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
          <input type="text" value={imageActive.description} />

          <SaveButton text="Salvar" />
        </Description>
      </SliderWrapper>
    </Container>
  );
}

ImagesUploader.propTypes = {
  initialImage: PropTypes.number,
};

ImagesUploader.defaultProps = {
  initialImage: 0,
};
