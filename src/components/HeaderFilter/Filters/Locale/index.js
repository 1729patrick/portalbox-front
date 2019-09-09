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
        filter: 'neighborhoods',
        value: selecteds,
      })
    );
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
              {city.neighborhoods.map(neighborhood => (
                <Checkbox
                  key={neighborhood._id}
                  onChange={handleChange}
                  value={neighborhood}
                  label={neighborhood.name}
                  checked={
                    !!selecteds.find(({ _id }) => _id === neighborhood._id)
                  }
                />
              ))}
            </span>
          </div>
        ))}
      </Content>
    </PopupLayout>
  );
}
