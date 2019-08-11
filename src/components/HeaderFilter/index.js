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
  { componenet: Finality, text: 'Alugar' },
  { componenet: Type, text: 'Tipo' },
  { componenet: Locale, text: 'Bairro' },
  { componenet: Price, text: 'Preço' },
  { componenet: Especification, text: 'Características' },
  { componenet: Advanced, text: 'Mais filtros' },
];

export default function HeaderFilter({ popupOpen, setPopupOpen }) {
  return (
    <Container>
      {optionsFilter.map((option, index) => (
        <Option
          key={index}
          index={index}
          setPopupOpen={setPopupOpen}
          component={option.componenet}
          popupOpen={popupOpen}
          text={option.text}
        />
      ))}
    </Container>
  );
}

HeaderFilter.propTypes = {
  popupOpen: PropTypes.number.isRequired,
  setPopupOpen: PropTypes.func.isRequired,
};
