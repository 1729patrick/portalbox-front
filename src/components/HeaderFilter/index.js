import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Container } from './styles';

import {
  Types,
  Finality,
  Locale,
  Price,
  Particulars,
  // Advanced,
} from './Filters';

import Option from './_layouts/Option';

const optionsFilter = [
  { component: Finality, filter: 'finality' },
  { component: Types, filter: 'types' },
  { component: Locale, filter: 'neighborhoods' },
  { component: Price, filter: 'price', width: '325px' },
  { component: Particulars, filter: 'particulars' },
  // { component: Advanced, title: 'Mais filtros' },
];

export default function HeaderFilter({ popupOpen, setPopupOpen }) {
  const filters = useSelector(state => state.filter.filters);

  return (
    <Container>
      {optionsFilter.map((option, index) => (
        <Option
          key={option.filter}
          index={index}
          setPopupOpen={setPopupOpen}
          component={option.component}
          popupOpen={popupOpen}
          title={filters[option.filter].title}
          width={option.width}
          selected={
            filters[option.filter].title !== filters[option.filter].titleDefault
          }
        />
      ))}
    </Container>
  );
}

HeaderFilter.propTypes = {
  popupOpen: PropTypes.number.isRequired,
  setPopupOpen: PropTypes.func.isRequired,
};
