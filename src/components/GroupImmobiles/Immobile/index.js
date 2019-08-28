import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { Container, Image, Details } from './styles';
import { particularsIcons } from '~/services/fakeData';

export default function Immobile({ immobile }) {
  const image = useMemo(() => immobile.images[0].file, [immobile.images]);
  return (
    <Container>
      <Image source={image} />

      <Details>
        <span>
          <h4>{immobile.type.name}</h4>
          <p>{immobile.price.rent}</p>
          <p>{immobile.price.sale}</p>
        </span>

        <p>{immobile.address.street}</p>

        <ul>
          {immobile.particulars.map(particular => (
            <li key={particular.title}>
              <img
                src={particularsIcons[particular.title]}
                alt={particular.title}
              />
              <p>{particular.value}</p>
            </li>
          ))}
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
