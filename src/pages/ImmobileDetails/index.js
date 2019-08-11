import React from 'react';

import { Container, Infos, ImagesWrapper } from './styles';

import Price from './Price';
import Maps from './Maps';
import Images from './Images';
import Financing from './Financing';
import Details from './Details';

export default function PlaceDetails() {
  return (
    <Container>
      <ImagesWrapper>
        <Images />
      </ImagesWrapper>

      <Infos>
        <Details />
        <Price />
      </Infos>

      <Maps />
      <Financing />
    </Container>
  );
}
