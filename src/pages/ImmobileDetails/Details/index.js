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
    let [firstParticular, secondParticular] = particularsSpotlight;

    firstParticular = getParticular({
      title: firstParticular.title,
      pos: firstParticular.value > 1,
      value: firstParticular.value,
    });

    secondParticular = getParticular({
      title: secondParticular.title,
      pos: secondParticular.value > 1,
      value: secondParticular.value,
    });

    const { rent, sale } = immobile.price;
    const priceRent = rent
      ? ` por R$ ${rent.toLocaleString(navigator.language, {
          minimumFractionDigits: 2,
        })}/mês`
      : ' com preço sob consulta';

    const rentFormatted =
      typeof rent === 'number' && rent >= 0 ? ` para alugar${priceRent}` : '';

    const priceSale = sale
      ? ` por R$ ${sale.toLocaleString(navigator.language, {
          minimumFractionDigits: 2,
        })}`
      : '';

    const saleFormatted =
      typeof sale === 'number' && sale >= 0
        ? typeof rent === 'number' && rent >= 0
          ? ` e para vender${priceSale}`
          : ` para vender${priceSale}`
        : ' com preço sob consulta';

    const area = [...particularsSpotlight, ...particulars].find(
      particular => particular.title === 'totalArea'
    );

    const areaFormatted = area
      ? ` ${getParticular({
          title: area.title,
          pos: 'simple',
          value: area.value,
        })}`
      : '';

    return `${immobile.type.name} com ${firstParticular}, ${secondParticular},${areaFormatted}${rentFormatted}${saleFormatted}`;

    // return 'Apartamento com 3 quartos para Alugar, 153 m² por R$ 6.000/Mês';
  }, [immobile, particulars, particularsSpotlight]);

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
          {particularsSpotlight.map(({ title, value }) => (
            <li key={title}>
              {getParticular({ title, pos: 'icon' }) && (
                <img src={getParticular({ title, pos: 'icon' })} alt="." />
              )}

              <p>{getParticular({ title, pos: 'simple', value })}</p>
            </li>
          ))}
        </ul>

        <div>
          {particulars.map(({ title, value }) => (
            <p key={title}>{getParticular({ title, pos: value > 1, value })}</p>
          ))}
        </div>
      </Particulars>
    </Container>
  );
}
