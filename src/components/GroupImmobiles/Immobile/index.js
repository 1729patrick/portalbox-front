import React from 'react';
import PropTypes from 'prop-types';

import { Container, Image, Details } from './styles';

import bed from '~/assets/carac/bed.svg';
import car from '~/assets/carac/car.svg';
import move from '~/assets/carac/move.svg';
import shower from '~/assets/carac/shower.svg';

export default function Immobile({ imobile }) {
  return (
    <Container>
      <Image source={imobile.images} />

      <Details>
        <span>
          <h4>{imobile.type}</h4>
          <p>{imobile.priceFormatted}</p>
        </span>

        <p>{imobile.address}</p>

        <ul>
          <li>
            <img src={bed} alt="Quartos" />
            <p>{imobile.roomsFormatted}</p>
          </li>
          <li>
            <img src={car} alt="Garagem" />
            <p>{imobile.garagesFormatted}</p>
          </li>
          <li>
            <img src={shower} alt="Banheiros" />
            <p>{imobile.bathroomsFormatted}</p>
          </li>
          <li>
            <img src={move} alt="Área" />
            <p>{imobile.area}m²</p>
          </li>
        </ul>
      </Details>
    </Container>
  );
}

Immobile.propTypes = {
  imobile: PropTypes.shape({
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
