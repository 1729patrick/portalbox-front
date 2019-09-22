import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Content, Checkbox } from './styles';

import PopupLayout from '../../_layouts/Popup';

import { setTypesFilter } from '~/store/modules/filter/actions';

export default function Types({ onClick }) {
  const dispatch = useDispatch();

  const types = useSelector(state => state.core.types);
  const saved = useSelector(state => state.filter.filters.types.saved);

  const [selecteds, setSelecteds] = useState(saved);

  useEffect(() => {
    dispatch(setTypesFilter({ types: selecteds }));
  }, [dispatch, selecteds]);

  return (
    <PopupLayout
      label="Qual tipo?"
      onClick={onClick}
      onClear={() => setSelecteds([])}
      showClear={!!(selecteds.length > 0)}
    >
      <Content>
        <Checkbox
          list={types}
          checkeds={selecteds}
          setCheckeds={setSelecteds}
          label="name"
          value="_id"
        />
      </Content>
    </PopupLayout>
  );
}
