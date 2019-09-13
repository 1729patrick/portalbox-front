import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';

import { Content, Values, Input } from './styles';
import PopupLayout from '../../_layouts/Popup';

export default function Price({ onClick }) {
  const [value, setValue] = useState([1000, 15000000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const valueLabelFormat = value => value.toLocaleString('pt-BR');

  const [min, max] = value;

  return (
    <PopupLayout
      label="Entre qual faixa de preço?"
      onClick={onClick}
      onClear={() => {}}
      showClear={!!false}
    >
      <Content>
        <span>
          <Slider
            min={950}
            max={30000000}
            value={[min || 0, max || 0]}
            onChange={handleChange}
            valueLabelDisplay="off"
            aria-labelledby="range-slider"
            valueLabelFormat={valueLabelFormat}
          />
        </span>

        <Values>
          <Input
            type="text"
            value={min}
            prefix="R$ "
            decimalSeparator=","
            thousandSeparator="."
            onValueChange={({ floatValue }) => setValue([floatValue, max])}
          />
          <Input
            type="text"
            value={max}
            prefix="R$ "
            decimalSeparator=","
            thousandSeparator="."
            onValueChange={({ floatValue }) => setValue([min, floatValue])}
          />
        </Values>
      </Content>
    </PopupLayout>
  );
}
