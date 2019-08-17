import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';
import { withTheme } from 'styled-components';

import { Container, Search } from './styles';
import HeaderFilter from '~/components/HeaderFilter';

import { links } from '~/services/fakeData';

function Header({ simple, searchable, ...props }) {
  const [popupOpen, setPopupOpen] = useState(-1);

  return (
    <Container {...props} onClickCapture={() => setPopupOpen(-1)}>
      <div>
        <Link to="/">
          <img
            src="http://fotos.sitemidas.com.br/per_corr/logos/logoGeral1221.png"
            alt="Logo"
          />
        </Link>

        {searchable && (
          <Search>
            <input type="text" placeholder="O que você procura?" />
            <MdSearch size={25} color={props.theme.header.search.color} />
          </Search>
        )}

        <ul>
          {links.map(link => (
            <li key={link.title}>{link.title}</li>
          ))}
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

export default withTheme(Header);
