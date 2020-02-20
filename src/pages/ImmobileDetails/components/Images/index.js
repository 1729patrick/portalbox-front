import React, { useMemo } from 'react';

import { Container, Button, Img } from './styles';

export default function Images({ openPreview, immobile }) {
  const images = useMemo(
    () => immobile.images.slice(0, window.innerWidth < 768 ? 3 : 4),
    [immobile.images]
  );

  return (
    <Container imagesLength={images.length}>
      {images.map((image, index) => (
        <Img
          key={image._id}
          className={index}
          gridArea={`img-${index}`}
          source={image.file}
          onClick={() => openPreview(index)}
        >
          <div />
        </Img>
      ))}

      {immobile.images.length > 4000 && (
        <Button text="Ver fotos" onClick={() => openPreview()} />
      )}
    </Container>
  );
}
