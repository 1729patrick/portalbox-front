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
  { component: Finality, title: 'Finalidade' },
  { component: Types, title: 'Tipo', pos: 'types' },
  { component: Locale, title: 'Bairro' },
  { component: Price, title: 'Preço' },
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
          title={option.pos ? filters[option.pos].title : option.title}
          selected={
            option.pos
              ? filters[option.pos].title !== filters[option.pos].default
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
