import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const SingleImageUploader = ({
  maxWidthImage,
  label,
  buttonText,
  setImage,
  image,
}) => {
  return (
    <Container maxWidthImage={maxWidthImage}>
      <div>
        <label>{label}</label>

        <button type="button">
          {buttonText}
          <input type="file" accept="image/*" onChange={setImage} />
        </button>
      </div>

      <img src={image} alt={label} />
    </Container>
  );
};

SingleImageUploader.propTypes = {
  maxWidthImage: PropTypes.string,
  label: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  setImage: PropTypes.func.isRequired,
  image: PropTypes.string,
};

SingleImageUploader.defaultProps = {
  maxWidthImage: '100%',
  image: '',
};

export default SingleImageUploader;
