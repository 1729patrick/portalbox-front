import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Content } from './styles';
import Checkbox from '~/components/Checkbox';

import PopupLayout from '../../_layouts/Popup';

import { setNeighborhoodsFilterRequest } from '~/store/modules/filter/actions';

export default function Locale({ onClick }) {
  const dispatch = useDispatch();

  const cities = useSelector(state => state.core.cities);
  const saved = useSelector(state => state.filter.filters.neighborhoods.saved);

  const [selecteds, setSelecteds] = useState(saved);

  useEffect(() => {
    dispatch(
      setNeighborhoodsFilterRequest({
        neighborhoods: selecteds,
      })
    );
  }, [dispatch, selecteds]);

  return (
    <PopupLayout
      label="Em qual bairro?"
      onClick={onClick}
      onClear={() => setSelecteds([])}
      showClear={!!(selecteds.length > 0)}
    >
      <Content>
        {cities.map(city => (
          <div key={city._id}>
            <p>{city.name}</p>
            <span>
              <Checkbox
                list={city.neighborhoods}
                checkeds={selecteds}
                setCheckeds={setSelecteds}
                label="name"
                value="_id"
              />
            </span>
          </div>
        ))}
      </Content>
    </PopupLayout>
  );
}
