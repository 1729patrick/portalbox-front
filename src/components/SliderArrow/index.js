import React from 'react';
import PropTypes from 'prop-types';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { Arrow } from './styles';

export default function SliderArrow({ className, onClick, next, prev }) {
  return (
    <Arrow className={className} onClick={onClick} next={next}>
      {next && <MdKeyboardArrowRight color="#000" size={25} />}
      {prev && <MdKeyboardArrowLeft color="#000" size={25} />}
    </Arrow>
  );
}

SliderArrow.propTypes = {
  next: PropTypes.bool,
  prev: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

SliderArrow.defaultProps = {
  next: false,
  prev: false,
  className: '',
  onClick: () => {},
};
