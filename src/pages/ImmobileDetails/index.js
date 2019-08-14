import React, { useState } from 'react';

import { Container, Infos, ImagesWrapper } from './styles';

import Price from './Price';
import Maps from './Maps';
import Images from './Images';
import Financing from './Financing';
import Details from './Details';

import Previews from './Previews';

export default function PlaceDetails() {
  const [previewsIsOpen, setPreviewsIsOpen] = useState(false);
  const [page, setPage] = useState('');

  const handlePreviewOpen = page => {
    setPreviewsIsOpen(true);
    setPage(page);
  };
  return previewsIsOpen ? (
    <Previews onClose={() => setPreviewsIsOpen(false)} page={page} />
  ) : (
    <Container>
      <ImagesWrapper>
        <Images openPreview={() => handlePreviewOpen('images')} />
      </ImagesWrapper>

      <Infos>
        <Details />
        <Price />
      </Infos>

      <Maps openPreview={() => handlePreviewOpen('maps')} />
      <Financing />
    </Container>
  );
}
