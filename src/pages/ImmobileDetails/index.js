import React, { useState } from 'react';

import { Container, Infos, ImagesWrapper } from './styles';

import Price from './Price';
import Maps from './Maps';
import Images from './Images';
import Financing from './Financing';
import Details from './Details';

import Preview from './Preview';

export default function PlaceDetails() {
  const [preview, setPreview] = useState({});

  const handlePreviewOpen = (page, args) => {
    setPreview({
      isOpen: true,
      page,
      args,
    });
  };

  const openImage = imageIndex =>
    handlePreviewOpen(
      'images',
      typeof imageIndex === 'number'
        ? {
            initialImage: imageIndex,
            location: { lat: -26.724933, lng: -53.532206 },
          }
        : { location: { lat: -26.724933, lng: -53.532206 } }
    );

  const openMap = location =>
    handlePreviewOpen('map', {
      location: { lat: -26.764955, lng: -53.640173 },
    });

  return (
    <Container scrollDisabled={preview.isOpen}>
      <ImagesWrapper>
        <Images openPreview={openImage} />
      </ImagesWrapper>

      <Infos>
        <Details openPreview={openMap} />
        <Price />
      </Infos>

      <Maps openPreview={openMap} />
      <Financing />

      {preview.isOpen && (
        <Preview onClose={() => setPreview({})} {...preview} />
      )}
    </Container>
  );
}
