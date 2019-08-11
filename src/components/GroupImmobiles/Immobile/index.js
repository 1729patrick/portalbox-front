import React from 'react';
import PropTypes from 'prop-types';

import { Container, Image, Details } from './styles';

import bed from '~/assets/carac/bed.svg';
import car from '~/assets/carac/car.svg';
import move from '~/assets/carac/move.svg';
import shower from '~/assets/carac/shower.svg';

export default function Immobile({ immobile }) {
  return (
    <Container>
      <Image source={immobile.images} />

      <Details>
        <span>
          <h4>{immobile.type}</h4>
          <p>{immobile.priceFormatted}</p>
        </span>

        <p>{immobile.address}</p>

        <ul>
          <li>
            <img src={bed} alt="Quartos" />
            <p>{immobile.roomsFormatted}</p>
          </li>
          <li>
            <img src={car} alt="Garagem" />
            <p>{immobile.garagesFormatted}</p>
          </li>
          <li>
            <img src={shower} alt="Banheiros" />
            <p>{immobile.bathroomsFormatted}</p>
          </li>
          <li>
            <img src={move} alt="Área" />
            <p>{immobile.area}m²</p>
          </li>
        </ul>
      </Details>
    </Container>
  );
}

Immobile.propTypes = {
  immobile: PropTypes.shape({
    images: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    priceFormatted: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    roomsFormatted: PropTypes.string.isRequired,
    garagesFormatted: PropTypes.string.isRequired,
    bathroomsFormatted: PropTypes.string.isRequired,
    area: PropTypes.number.isRequired,
  }).isRequired,
};
