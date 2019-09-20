import React, { useMemo } from 'react';

import InputMask from '~/components/InputMask';
import { Card } from '../styles';

export default function Price({ onOpenPicker, values, setFieldValue }) {
  const path = useMemo(() => values.price, [values.price]);

  return (
    <Card>
      <div>
        <h1>
          Preço <p>(Opcional)</p>
        </h1>
        <p>
          Digite <b>0</b> para exibir "Sob Consulta" no PORTAL
        </p>
      </div>
      <InputMask
        label="Preço para venda"
        placeholder="Digite o preço para venda"
        value={path.sale}
        setValue={value => setFieldValue('price.sale', value)}
      />
      <InputMask
        label="Preço para locação"
        placeholder="Digite o preço para locação"
        value={path.rent}
        setValue={value => setFieldValue('price.rent', value)}
      />
      <button type="button" onClick={onOpenPicker}>
        Adicionar taxas
      </button>
    </Card>
  );
}
