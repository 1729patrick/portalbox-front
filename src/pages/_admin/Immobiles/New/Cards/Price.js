import React from 'react';
import { Scope } from '@rocketseat/unform';

import Input from '~/components/Input';

export default function Cards() {
  return (
    <Scope path="price">
      <div>
        <h1>
          Preço <p>(Opcional)</p>
        </h1>
        <p>
          Imóveis sem preço serão ignorados ao utilizar o filtro de preço no
          PORAL
        </p>
      </div>

      <Input
        type="number"
        name="sale"
        label="Preço para venda"
        placeholder="Digite o preço para venda"
      />
      <Input
        type="number"
        name="rent"
        label="Preço para locação"
        placeholder="Digite o preço para locação"
      />

      <button type="button">Adicionar taxas</button>
    </Scope>
  );
}
