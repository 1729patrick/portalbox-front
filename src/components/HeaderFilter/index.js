import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Container } from './styles';

import {
  Types,
  Finality,
  Locale,
  Price,
  Especification,
  Advanced,
} from './Filters';

import Option from './_layouts/Option';

const optionsFilter = [
  { component: Finality, title: 'Finalidade', filter: 'finality' },
  { component: Types, title: 'Tipo', filter: 'types' },
  { component: Locale, title: 'Bairro', filter: 'neighborhoods' },
  { component: Price, title: 'Preço', width: '325px' },
  { component: Especification, title: 'Características' },
  { component: Advanced, title: 'Mais filtros' },
];

export default function HeaderFilter({ popupOpen, setPopupOpen }) {
  const filters = useSelector(state => state.filter.filters);

  return (
    <Container>
      {optionsFilter.map((option, index) => (
        <Option
          key={option.title}
          index={index}
          setPopupOpen={setPopupOpen}
          component={option.component}
          popupOpen={popupOpen}
          title={option.filter ? filters[option.filter].title : option.title}
          width={option.width}
          selected={
            option.filter
              ? filters[option.filter].title !==
                filters[option.filter].titleDefault
              : false
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
