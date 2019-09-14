import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Content } from './styles';
import Checkbox from '~/components/Checkbox';

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

  const handleChange = type => {
    const selected = selecteds.find(({ _id }) => _id === type._id);

    if (!selected) {
      setSelecteds([...selecteds, type]);
    } else {
      setSelecteds(selecteds.filter(({ _id }) => _id !== type._id));
    }
  };

  return (
    <PopupLayout
      label="Qual tipo?"
      onClick={onClick}
      onClear={() => setSelecteds([])}
      showClear={!!(selecteds.length > 0)}
    >
      <Content>
        {types.map(type => (
          <Checkbox
            key={type._id}
            onChange={handleChange}
            value={type}
            label={type.name}
            checked={!!selecteds.find(({ _id }) => _id === type._id)}
          />
        ))}
      </Content>
    </PopupLayout>
  );
}
