import React from 'react';

import { Container, Button, Highlighter } from './styles';

export default function Price() {
  return (
    <Container>
      <h4>
        <Highlighter>Aluguel</Highlighter>
        R$ 6.000/Mês
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

      <h4>
        <Highlighter>Venda</Highlighter>
        R$ 600.000
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

      <Button text="Tenho interesse" />
    </Container>
  );
}
