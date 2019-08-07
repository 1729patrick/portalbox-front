import React, { useState } from 'react';

import { MdSearch } from 'react-icons/md';
import HeaderFilter from '~/components/HeaderFilter';
import { Container } from './styles';

export default function Header() {
  const [popupOpen, setPopupOpen] = useState(0);

  return (
    <Container
      onClickCapture={e => {
        setPopupOpen(0);
      }}
    >
      <div>
        <div>
          <img
            src="https://www.inovarimoveis.imb.br/assets/images/logo.png"
            alt="Logo"
          />

          <div>
            <input type="text" placeholder="O que você procura?" />
            <MdSearch size={25} color="#fff" />
          </div>
        </div>

        <ul>
          <li>Anunciar meu imóvel</li>
          <li>Área do cliente</li>
          <li>Quem somos</li>
          <li>Contato</li>
        </ul>
      </div>

      <HeaderFilter popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
    </Container>
  );
}
