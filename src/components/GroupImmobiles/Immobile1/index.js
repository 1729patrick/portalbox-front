import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { Container, Image, Details } from './styles';
import { particularsName } from '~/services/fakeData';

// {
//   id: 1,
//   images:
//     'https://cdn.cyrela.com.br/Files/Imagens/Imoveis/2235/imovel/132043120495224766-apartamento-moema-by-cyrela-lounge-festas-636x295-.jpg',
//   type: 'Apartamento',
//   priceFormatted: 'R$ 1720,00/mês',
//   address: 'Rua Maria Lúcia da Paz - Gleba Fazenda Palhano, Londrina - PR',
//   roomsFormatted: '3 quartos',
//   garagesFormatted: '1 vaga',
//   bathroomsFormatted: '2 banheiros',
//   area: 150,
//   location: { lat: -26.724933, lng: -53.532206 },
// },

export default function Immobile({ immobile }) {
  const image = useMemo(() => {
    if (immobile.images && immobile.images[0]) {
      return immobile.images[0].file;
    }
    return 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi_gvfe4KbkAhVrLLkGHY-MDXAQjRx6BAgBEAQ&url=https%3A%2F%2Fionicframework.com%2Fblog%2Fannouncing-the-ionic-react-beta%2F&psig=AOvVaw3th3jrNASSsyjYQS0S_J9R&ust=1567122594326608';
  }, [immobile.images]);

  const address = useMemo(() => {
    const { address } = immobile;

    const number = address.number ? `, Nº ${address.number}` : '';
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
    const priceFormatted = immobile.price.rent.toLocaleString(
      navigator.language,
      {
        minimumFractionDigits: 2,
      }
    );

    return `R$ ${priceFormatted}/mês`;
  }, [immobile.price.rent]);

  const priceSale = useMemo(() => {
    if (!immobile.price.sale) {
      return '';
    }

    const priceFormatted = immobile.price.sale.toLocaleString(
      navigator.language,
      {
        minimumFractionDigits: 2,
      }
    );

    return `R$ ${priceFormatted}`;
  }, [immobile.price.sale]);

  return (
    <Container>
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

        <ul>
          {immobile.particulars.map(particular => (
            <li key={particular.title}>
              <p>
                {particular.value}{' '}
                <span>{particularsName[particular.title]}</span>
              </p>
            </li>
          ))}
        </ul>

        <p>{address}</p>
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
