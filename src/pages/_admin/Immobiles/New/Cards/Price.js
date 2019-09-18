import React from 'react';

import InputMask from '~/components/InputMask';

export default function Cards({ onOpenPicker }) {
  return (
    <>
      <div>
        <h1>
          Preço <p>(Opcional)</p>
        </h1>
        <p>
          Digite <b>0</b> para exibir "Sob Consulta" no PORTAL
        </p>
      </div>
      <InputMask
        name="sale"
        label="Preço para venda"
        placeholder="Digite o preço para venda"
      />
      <InputMask
        name="rent"
        label="Preço para locação"
        placeholder="Digite o preço para locação"
      />
      <button type="button" onClick={onOpenPicker}>
        Adicionar taxas
      </button>
    </>
  );
}
