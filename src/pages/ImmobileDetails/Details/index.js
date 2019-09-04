import React, { useMemo } from 'react';

import { Container, Particulars } from './styles';

import { getParticular } from '~/services/fakeData';

export default function Details({ openPreview, immobile }) {
  const particularsSpotlight = useMemo(() => immobile.particulars.slice(0, 4), [
    immobile,
  ]);
  const particulars = useMemo(() => immobile.particulars.splice(4), [immobile]);
  const address = useMemo(() => {
    const { address } = immobile;

    const number = address.number ? `, ${address.number}` : '';
    const neighborhood = address.neighborhood
      ? `, ${address.neighborhood.name}`
      : '';
    const city = address.city ? `${address.city.name} - ` : '';

    return `${address.street}${neighborhood}${number} - ${city}SC`;
  }, [immobile]);

  const title = useMemo(() => {
    console.log(immobile);

    const particular0 = getParticular(particularsSpotlight[0].title)(
      particularsSpotlight[0].value > 1
    )(particularsSpotlight[0].value);

    const particular1 = getParticular(particularsSpotlight[1].title)(
      particularsSpotlight[1].value > 1
    )(particularsSpotlight[1].value);

    const priceRent =
      immobile.price.rent &&
      immobile.price.rent.toLocaleString(navigator.language, {
        minimumFractionDigits: 2,
      });

    const rent = immobile.price.rent
      ? ` para Alugar por R$ ${priceRent}/mês`
      : '';

    const priceSale =
      immobile.price.sale &&
      immobile.price.sale.toLocaleString(navigator.language, {
        minimumFractionDigits: 2,
      });

    const sale = immobile.price.sale
      ? rent
        ? ` e para Vender por R$ ${priceSale}`
        : ` para Vender por R$ ${priceSale}`
      : '';

    const area = immobile.particulars.find(
      particular => particular.title === 'totalArea'
    );
    const areaFormatted = area ? ` ${area.value} m²` : '';

    return `${immobile.type.name} com ${particular0}, ${particular1},${areaFormatted}${rent}${sale}`;

    // return 'Apartamento com 3 quartos para Alugar, 153 m² por R$ 6.000/Mês';
  }, []);

  return (
    <Container>
      <h2>{title}</h2>

      <h3>
        {address}
        <span onClick={openPreview}>Ver no mapa</span>
      </h3>

      <Particulars>
        <h2>Características</h2>

        <ul>
          {particularsSpotlight.map(particular => (
            <li key={particular.title}>
              {getParticular(particular.title)('icon') && (
                <img
                  src={getParticular(particular.title)('icon')()}
                  alt="Quartos"
                />
              )}
              <p>
                {getParticular(particular.title)(particular.value > 1)(
                  particular.value
                )}
              </p>
            </li>
          ))}
        </ul>

        <div>
          {particulars.map(particular => (
            <p key={particular.title}>
              {getParticular(particular.title)(particular.value > 1)(
                particular.value
              )}
            </p>
          ))}
        </div>
      </Particulars>
    </Container>
  );
}
