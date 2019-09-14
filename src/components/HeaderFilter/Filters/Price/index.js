import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from '@material-ui/core/Slider';

import { Content, Values, Input } from './styles';
import PopupLayout from '../../_layouts/Popup';

import { setPriceFilter } from '~/store/modules/filter/actions';

export default function Price({ onClick }) {
  const dispatch = useDispatch();

  const { saved, valueDefault } = useSelector(
    state => state.filter.filters.price
  );
  const [value, setValue] = useState([saved.min, saved.max]);

  useEffect(() => {
    const [min, max] = value;
    dispatch(setPriceFilter({ price: { min, max } }));
  }, [dispatch, value]);

  const { min, max } = useMemo(() => valueDefault, [valueDefault]);
  const [minValue, maxValue] = useMemo(() => value, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const valueLabelFormat = value => value.toLocaleString('pt-BR');

  return (
    <PopupLayout
      label="Entre qual faixa de preço?"
      onClick={onClick}
      onClear={() => setValue([min, max])}
      showClear={min !== minValue || max !== maxValue}
    >
      <Content>
        <span>
          <Slider
            min={min}
            max={max}
            value={[minValue || 0, maxValue || 0]}
            onChange={handleChange}
            valueLabelDisplay="off"
            aria-labelledby="range-slider"
            valueLabelFormat={valueLabelFormat}
          />
        </span>

        <Values>
          <Input
            type="text"
            value={minValue}
            prefix="R$ "
            decimalSeparator=","
            thousandSeparator="."
            onValueChange={({ floatValue }) => setValue([floatValue, maxValue])}
          />
          <Input
            type="text"
            value={maxValue}
            prefix="R$ "
            decimalSeparator=","
            thousandSeparator="."
            onValueChange={({ floatValue }) => setValue([minValue, floatValue])}
          />
        </Values>
      </Content>
    </PopupLayout>
  );
}
