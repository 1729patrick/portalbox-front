import React from 'react';
import PropTypes from 'prop-types';

import Popup from './Popup';
import { Container, Option } from './styles';

import {
  Type,
  Finality,
  Locale,
  Price,
  Especification,
  Advanced,
} from './Filters';

export default function HeaderFilter({ popupOpen, setPopupOpen }) {
  return (
    <Container>
      <Option onClick={() => setPopupOpen(1)} selected>
        <Popup
          component={Finality}
          open={popupOpen === 1}
          onClick={() => setPopupOpen(1)}
        >
          <span>Alugar</span>
        </Popup>
      </Option>

      <Option onClick={() => setPopupOpen(2)} selected>
        <Popup
          component={Type}
          open={popupOpen === 2}
          onClick={() => setPopupOpen(2)}
        >
          <span>Tipo</span>
        </Popup>
      </Option>

      <Option onClick={() => setPopupOpen(3)}>
        <Popup
          component={Locale}
          open={popupOpen === 3}
          onClick={() => setPopupOpen(3)}
        >
          <span>Bairro</span>
        </Popup>
      </Option>

      <Option onClick={() => setPopupOpen(4)}>
        <Popup
          component={Price}
          open={popupOpen === 4}
          onClick={() => setPopupOpen(4)}
        >
          <span>Preço</span>
        </Popup>
      </Option>

      <Option onClick={() => setPopupOpen(5)}>
        <Popup
          component={Especification}
          open={popupOpen === 5}
          onClick={() => setPopupOpen(5)}
        >
          <span>Características</span>
        </Popup>
      </Option>

      <Option onClick={() => setPopupOpen(6)}>
        <Popup component={Advanced} open={popupOpen === 6}>
          <span>Mais filtros</span>
        </Popup>
      </Option>
    </Container>
  );
}

HeaderFilter.propTypes = {
  popupOpen: PropTypes.bool.isRequired,
  setPopupOpen: PropTypes.func.isRequired,
};
