import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';

import { Container, Search } from './styles';
import HeaderFilter from '~/components/HeaderFilter';

export default function Header({ simple, searchable, ...props }) {
  const [popupOpen, setPopupOpen] = useState(0);

  return (
    <Container {...props} onClickCapture={() => setPopupOpen(0)}>
      <div>
        <img
          src="http://fotos.sitemidas.com.br/per_corr/logos/logoGeral1221.png"
          alt="Logo"
        />

        {searchable && (
          <Search>
            <input type="text" placeholder="O que você procura?" />
            <MdSearch size={25} color="#444" />
          </Search>
        )}

        <ul>
          <li>Anunciar meu imóvel</li>
          <li>Área do cliente</li>
          <li>Empreendimentos</li>
          <li>Índices</li>
          <li>Quem somos</li>
          <li>Contato</li>
        </ul>
      </div>

      {!simple && (
        <HeaderFilter popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
      )}
    </Container>
  );
}

Header.propTypes = {
  contranstLight: PropTypes.bool,
  overlay: PropTypes.bool,
  searchable: PropTypes.bool.isRequired,
  simple: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  contranstLight: false,
  overlay: false,
};
