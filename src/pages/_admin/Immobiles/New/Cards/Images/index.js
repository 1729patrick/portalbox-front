import React, { useState } from 'react';

import ImagesUploader from '~/components/_admin/ImageUploader';
import { Card } from '../../styles';

const Images = () => {
  const [_, setImages] = useState([]);

  return (
    <Card>
      <div>
        <h1>Fotos</h1>
      </div>

      <ImagesUploader name="images" onSave={setImages} />
    </Card>
  );
};

export default Images;
