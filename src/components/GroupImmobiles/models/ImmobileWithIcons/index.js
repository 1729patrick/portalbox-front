import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { Container, Image, Details } from './styles';
import { getParticular } from '~/services/fakeData';

import { formatPrice } from '~/services/format';

export default function ImmobileWithIcons({ immobile, openDetails }) {
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
          <h4>{immobile.type.name}</h4>

          {(!priceRent || !priceSale) && (
            <span>
              <p>{priceRent}</p>
              <p>{priceSale}</p>
            </span>
          )}
        </span>

        <p>{address}</p>

        <ul>
          {immobile.particulars.map(({ title, value }) => (
            <li key={title}>
              {getParticular({ title, pos: 'icon' }) && (
                <img src={getParticular({ title, pos: 'icon' })} alt="." />
              )}

              <p>{getParticular({ title, pos: 'simple', value })}</p>
            </li>
          ))}
        </ul>
      </Details>
    </Container>
  );
}

ImmobileWithIcons.propTypes = {
  immobile: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        file: PropTypes.string.isRequired,
      })
    ).isRequired,
    address: PropTypes.shape({
      number: PropTypes.number,
      neighborhood: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      city: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      street: PropTypes.string.isRequired,
    }),
    price: PropTypes.shape({
      rent: PropTypes.number,
      sale: PropTypes.number,
    }),
    particulars: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        value: PropTypes.any.isRequired,
      })
    ),
  }).isRequired,
  openDetails: PropTypes.func.isRequired,
};
