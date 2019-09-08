import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Content } from './styles';
import Checkbox from '~/components/Checkbox';

import PopupLayout from '../../_layouts/Popup';

import { setTypesFilterRequest } from '~/store/modules/filter/actions';

export default function Types({ onClick }) {
  const dispatch = useDispatch();

  const types = useSelector(state => state.core.types);
  const saved = useSelector(state => state.filter.filters.types.saved);

  const [selecteds, setSelecteds] = useState([]);

  useEffect(() => {
    dispatch(setTypesFilterRequest({ filter: 'types', value: selecteds }));
  }, [dispatch, selecteds]);

  useEffect(() => {
    setSelecteds(saved);
  }, [saved]);

  const handleChange = type => {
    const selected = selecteds.find(({ _id }) => _id === type._id);

    if (!selected) {
      setSelecteds([...selecteds, type]);
    } else {
      setSelecteds(selecteds.filter(({ _id }) => _id !== type._id));
    }
  };

  return (
    <PopupLayout label="Qual tipo?" onClick={onClick}>
      <Content>
        {types.map(type => (
          <Checkbox
            key={type.name}
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
