import React from 'react';
import PropTypes from 'prop-types';

import { CardImages } from './styles';

import SingleImageUploader from '~/components/_admin/SingleImageUploader';

const Images = ({ values, setFieldValue, errors }) => {
  const uploadFile = (path, { files }) => {
    setFieldValue(path, {
      url: URL.createObjectURL(files[0]),
    });
  };

  return (
    <CardImages>
      <div>
        <h1>Fotos</h1>

        <span>{errors.logo?.url || errors.banner?.url}</span>
      </div>

      <SingleImageUploader
        maxWidthImage="90px"
        label="Logo"
        buttonText="Selecionar Logo"
        setImage={({ target }) => uploadFile('logo', target)}
        image={values.logo?.url}
      />

      <SingleImageUploader
        maxWidthImage="100%"
        label="Banner"
        buttonText="Selecionar Banner"
        setImage={({ target }) => uploadFile('banner', target)}
        image={values.banner?.url}
      />
    </CardImages>
  );
};

Images.propTypes = {
  values: PropTypes.shape({
    banner: PropTypes.shape({ url: PropTypes.string }),
    logo: PropTypes.shape({ url: PropTypes.string }),
  }).isRequired,
  setFieldValue: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    banner: PropTypes.shape({ url: PropTypes.string }),
    logo: PropTypes.shape({ url: PropTypes.string }),
  }).isRequired,
};

export default Images;
