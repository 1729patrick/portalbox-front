import React from 'react';

import { Container, Button } from './styles';

export default function Financing() {
  return (
    <Container>
      <h2>Simule seu financiamento</h2>

      <form action="">
        <span>
          <label htmlFor="">Valor do imóvel</label>
          <input type="number" value="6000000" onChange={() => {}} />
        </span>

        <span>
          <label htmlFor="">Valor de entrada</label>
          <input type="number" value="60000" onChange={() => {}} />
        </span>

        <span>
          <label htmlFor="">Quantidade de parcelas</label>
          <input type="number" value="36" onChange={() => {}} />
        </span>

        <Button text="Simular" />
      </form>
    </Container>
  );
}
