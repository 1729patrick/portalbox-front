import React, { useMemo } from 'react';
import { Container, Button, Highlighter } from './styles';

import { getRate } from '~/services/fakeData';

import { formatPrice } from '~/services/format';

export default function Price({ immobile }) {
  const priceRent = useMemo(() => {
    const price = immobile.price.rent;

    if (price == null) {
      return '';
    }

    if (price === 0) {
      return 'Sob Consulta';
    }

    return `${formatPrice(price)}/mês`;
  }, [immobile.price.rent]);

  const priceSale = useMemo(() => {
    const price = immobile.price.sale;
    if (price == null) {
      return '';
    }

    if (price === 0) {
      return 'Sob Consulta';
    }

    return formatPrice(price);
  }, [immobile.price.sale]);

  return (
    <Container>
      {priceRent && (
        <>
          <h4>
            <Highlighter>Aluguel</Highlighter>
            {priceRent}
          </h4>

          <ul>
            {immobile.rates.map(({ title, value }) => (
              <li key={title}>
                <span>{getRate(title)}</span>
                <span>{formatPrice(value)}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      {priceSale && (
        <>
          <h4>
            <Highlighter>Venda</Highlighter>
            {priceSale}
          </h4>

          <ul>
            {immobile.rates.map(({ title, value }) => (
              <li key={title}>
                <span>{getRate(title)}</span>
                <span>{formatPrice(value)}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      <Button text="Tenho interesse" />
    </Container>
  );
}
