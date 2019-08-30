import React, { useMemo } from 'react';

import { Container, Button, Highlighter } from './styles';

export default function Price({ immobile }) {
  const priceRent = useMemo(() => {
    const price = immobile.price.rent;

    if (price == null) {
      return '';
    }

    if (price === 0) {
      return 'Sob Consulta';
    }

    const priceFormatted = price.toLocaleString(navigator.language, {
      minimumFractionDigits: 2,
    });

    return `R$ ${priceFormatted}/mês`;
  }, [immobile.price.rent]);

  const priceSale = useMemo(() => {
    const price = immobile.price.sale;
    if (price == null) {
      return '';
    }

    if (price === 0) {
      return 'Sob Consulta';
    }

    const priceFormatted = price.toLocaleString(navigator.language, {
      minimumFractionDigits: 2,
    });

    return `R$ ${priceFormatted}`;
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
            <li>
              <span>IPTU</span>
              <span>R$ 52,00</span>
            </li>

            <li>
              <span>Condomínio</span>
              <span>R$ 52,00</span>
            </li>
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
            <li>
              <span>IPTU</span>
              <span>R$ 52,00</span>
            </li>

            <li>
              <span>Condomínio</span>
              <span>R$ 52,00</span>
            </li>
          </ul>
        </>
      )}

      <Button text="Tenho interesse" />
    </Container>
  );
}
