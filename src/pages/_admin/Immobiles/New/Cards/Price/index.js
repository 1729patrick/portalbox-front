import React, { useMemo } from 'react';

import InputMask from '~/components/InputMask';
import { CardPrice } from './styles';

export default function Price({
  onOpenPicker,
  values,
  errors,
  setFieldValue,
  touched,
  formSubmitted,
  setFieldTouched,
}) {
  const path = useMemo(() => values.price, [values.price]);

  const getTouched = field => {
    return touched.price ? touched.price[field] : null;
  };

  return (
    <CardPrice>
      <div>
        <div>
          <h1>Preço</h1>

          {touched.price || formSubmitted ? <span>{errors.price}</span> : null}
        </div>

        <p>
          Digite <b>0</b> para exibir "Sob Consulta" no PORTAL
        </p>
      </div>

      <InputMask
        label="Preço para venda"
        placeholder="Digite o preço para venda"
        value={path.sale}
        type="number"
        setValue={value => setFieldValue('price.sale', value)}
        touched={getTouched('sale')}
        formSubmitted={formSubmitted}
        setTouched={() => setFieldTouched('price.sale')}
      />
      <InputMask
        label="Preço para locação"
        placeholder="Digite o preço para locação"
        value={path.rent}
        type="number"
        setValue={value => setFieldValue('price.rent', value)}
        touched={getTouched('rent')}
        formSubmitted={formSubmitted}
        setTouched={() => setFieldTouched('price.rent')}
      />
      <button type="button" onClick={onOpenPicker}>
        Adicionar taxas
      </button>
    </CardPrice>
  );
}
