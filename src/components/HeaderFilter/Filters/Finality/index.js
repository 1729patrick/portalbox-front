import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Toggle from '~/components/Toggle';

import PopupLayout from '../../_layouts/Popup';

import { setFinalityFilter } from '~/store/modules/filter/actions';

export default function Finality({ onClick }) {
  const dispatch = useDispatch();
  const saved = useSelector(state => state.filter.filters.finality.saved);

  const [selected, setSelected] = useState(saved);

  useEffect(() => {
    dispatch(setFinalityFilter({ finality: selected }));
  }, [dispatch, selected]);

  return (
    <PopupLayout
      label="O que você precisa?"
      onClick={onClick}
      onClear={() => setSelected({})}
      showClear={!!selected.value}
    >
      <Toggle
        options={[
          { value: 'rend', title: 'Alugar' },
          { value: 'sale', title: 'Comprar' },
        ]}
        selected={selected}
        setSelected={setSelected}
      />
    </PopupLayout>
  );
}
