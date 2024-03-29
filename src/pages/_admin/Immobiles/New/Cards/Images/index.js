import React from 'react';

import ImagesUploader from '~/components/_admin/ImageUploader';

import { CardImages } from './styles';

const Images = ({ values, setFieldValue, errors }) => {
  return (
    <CardImages>
      <div>
        <h1>Fotos</h1>

        <p>Adicione ao menos uma foto</p>
      </div>

      <ImagesUploader
        images={values.images}
        setImages={images => setFieldValue('images', images)}
      />
    </CardImages>
  );
};

export default Images;
