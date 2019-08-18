import React, { useState, useMemo } from 'react';
import InputRange from 'react-input-range';

import { Content, Values } from './styles';
import PopupLayout from '../../_layouts/Popup';

export default function Price() {
  const [value, setValue] = useState({
    min: 500,
    max: 1500000,
  });

  const min = useMemo(
    () =>
      value.min.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }),
    [value.min]
  );

  const max = useMemo(
    () =>
      value.max.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }),
    [value.max]
  );

  return (
    <PopupLayout label="Entre qual faixa de preço?">
      <Content>
        <InputRange
          formatLabel={value =>
            value.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })
          }
          maxValue={1500000}
          minValue={500}
          value={value}
          step={100}
          onChange={setValue}
        />

        <Values>
          <input type="text" value={min} readOnly />
          <input type="text" value={max} readOnly />
        </Values>
      </Content>
    </PopupLayout>
  );
}
