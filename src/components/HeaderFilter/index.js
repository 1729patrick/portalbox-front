/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Popup from './Popup';
import { Container } from './styles';

import { Type, Categories, Locale } from './Filters';

export default function HeaderFilter({ popupOpen, setPopupOpen }) {
  return (
    <Container>
      <li onClick={() => setPopupOpen(1)}>
        <Popup component={Type} open={popupOpen === 1}>
          <span>Alugar</span>
        </Popup>
      </li>

      <li onClick={() => setPopupOpen(2)}>
        <Popup component={Categories} open={popupOpen === 2}>
          <span>Apartamento</span>
        </Popup>
      </li>

      <li onClick={() => setPopupOpen(3)}>
        <Popup component={Locale} open={popupOpen === 3}>
          <span>Bairros</span>
        </Popup>
      </li>

      <li onClick={() => setPopupOpen(4)}>
        <Popup
          component={() => <div style={{ height: 100 }} />}
          open={popupOpen === 4}
        >
          <span>Preço</span>
        </Popup>
      </li>

      <li onClick={() => setPopupOpen(5)}>
        <Popup component={() => <div>Mais filtros</div>} open={popupOpen === 5}>
          <span>Características</span>
        </Popup>
      </li>

      <li onClick={() => setPopupOpen(6)}>
        <Popup component={() => <div>Mais filtros</div>} open={popupOpen === 6}>
          <span>Mais filtros</span>
        </Popup>
      </li>
    </Container>
  );
}
