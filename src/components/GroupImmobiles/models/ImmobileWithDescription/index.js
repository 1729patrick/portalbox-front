/* eslint-disable no-shadow */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { Container, Image, Details } from './styles';
import { getParticular } from '~/services/fakeData';

import { formatPrice, formatTitleImmobile } from '~/services/format';

export default function ImmobileWithDescription({ immobile, openDetails }) {
  const image = useMemo(() => {
    if (immobile.images && immobile.images[0]) {
      return immobile.images[0].file;
    }

    return '';
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
    return immobile.price.rent > 0
      ? `${formatPrice(immobile.price.rent)}/mês`
      : 'Sob Consulta';
  }, [immobile.price.rent]);

  const priceSale = useMemo(() => {
    return immobile.price.sale > 0
      ? formatPrice(immobile.price.sale)
      : 'Sob Consulta';
  }, [immobile.price.sale]);

  const title = useMemo(() => {
    return formatTitleImmobile(immobile);
  }, [immobile]);

  return (
    <Container onClick={() => openDetails(immobile._id, address)}>
      <Image source={image} />

      <Details>
        <span>
          {immobile.particulars.map(({ title, value }) => (
            <p key={title}>{getParticular({ title, pos: 'simple', value })}</p>
          ))}
        </span>

        <h2>{title}</h2>

        <div>
          {immobile.price.sale >= 0 ? (
            <div>
              <span>Venda</span>
              <p>{priceSale}</p>
            </div>
          ) : null}

          {immobile.price.rent >= 0 ? (
            <div>
              <span>Locação</span>
              <p>{priceRent}</p>
            </div>
          ) : null}
        </div>
      </Details>
    </Container>
  );
}

ImmobileWithDescription.propTypes = {
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
