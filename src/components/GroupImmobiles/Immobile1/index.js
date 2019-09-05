import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { Container, Image, Details } from './styles';
import { getParticular } from '~/services/fakeData';

import { formatPrice, formatTitleImmobile } from '~/services/format';

export default function Immobile({ immobile, openDetails }) {
  const image = useMemo(() => {
    if (immobile.images && immobile.images[0]) {
      return immobile.images[0].file;
    }

    return 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi_gvfe4KbkAhVrLLkGHY-MDXAQjRx6BAgBEAQ&url=https%3A%2F%2Fionicframework.com%2Fblog%2Fannouncing-the-ionic-react-beta%2F&psig=AOvVaw3th3jrNASSsyjYQS0S_J9R&ust=1567122594326608';
  }, [immobile.images]);

  const address = useMemo(() => {
    const { address } = immobile;

    const number = address.number ? `, ${address.number}` : '';
    const neighborhood = address.neighborhood
      ? `, ${address.neighborhood.name}`
      : '';
    const city = address.city ? `${address.city.name} - ` : '';

    return `${address.street}${neighborhood}${number} - ${city}SC`;
  }, [immobile]);

  const priceRent = useMemo(() => {
    if (!immobile.price.rent) {
      return '';
    }

    return `${formatPrice(immobile.price.rent)}/mês`;
  }, [immobile.price.rent]);

  const priceSale = useMemo(() => {
    if (!immobile.price.sale) {
      return '';
    }

    return formatPrice(immobile.price.sale);
  }, [immobile.price.sale]);

  return (
    <Container onClick={() => openDetails(immobile._id, address)}>
      <Image source={image} />

      <Details>
        <span>
          {immobile.particulars.map(({ title, value }) => (
            <p>{getParticular({ title, pos: 'simple', value })}</p>
          ))}
        </span>

        <h2>{formatTitleImmobile()}</h2>
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
