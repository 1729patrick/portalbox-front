import React from 'react';
import { Scope } from '@rocketseat/unform';

import Input from '~/components/Input';

export default function Cards({ openRatePicker }) {
  return (
    <Scope path="price">
      <div>
        <h1>
          Preço <p>(Opcional)</p>
        </h1>
        <p>
          Digite <b>0</b> para exibir "Sob Consulta" no PORTAL
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

      <button type="button" onClick={openRatePicker}>
        Adicionar taxas
      </button>
    </Scope>
  );
}
