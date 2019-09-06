import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

import {
  Type,
  Finality,
  Locale,
  Price,
  Especification,
  Advanced,
} from './Filters';

import Option from './_layouts/Option';

const optionsFilter = [
  { componenet: Finality, title: 'Finalidade' },
  { componenet: Type, title: 'Tipo' },
  { componenet: Locale, title: 'Bairro' },
  { componenet: Price, title: 'Preço' },
  { componenet: Especification, title: 'Características' },
  { componenet: Advanced, title: 'Mais filtros' },
];

export default function HeaderFilter({ popupOpen, setPopupOpen }) {
  return (
    <Container>
      {optionsFilter.map((option, index) => (
        <Option
          key={option.title}
          index={index}
          setPopupOpen={setPopupOpen}
          component={option.componenet}
          popupOpen={popupOpen}
          title={option.title}
          selected={option.selected}
        />
      ))}
    </Container>
  );
}

HeaderFilter.propTypes = {
  popupOpen: PropTypes.number.isRequired,
  setPopupOpen: PropTypes.func.isRequired,
};
