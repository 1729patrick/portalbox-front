import React, { useRef, useEffect, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';
import { withTheme } from 'styled-components';

import { Container, Search } from './styles';
import HeaderFilter from '~/components/HeaderFilter';
import { links } from '~/services/fakeData';
import { saveFilterRequest } from '~/store/modules/filter/actions';
import { setPopupOpen } from '~/store/modules/popup/actions';

function Header({ simple, searchable, history, ...props }) {
  const dispatch = useDispatch();

  const logo = useSelector(state => state.company.logo?.url);
  const popupOpen = useSelector(state => state.popup);

  const node = useRef();

  const setPopup = useCallback(
    popup => {
      dispatch(setPopupOpen(popup));
    },
    [dispatch]
  );

  const handleClick = useCallback(
    e => {
      if (!node?.current?.contains(e.target) && popupOpen !== -1) {
        dispatch(saveFilterRequest());
      }
    },
    [dispatch, popupOpen]
  );

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, [handleClick]);

  const onClickLogo = () => {
    const { pathname } = history.location;

    if (pathname === '/imoveis') {
      return history.push('/');
    }

    return history.push('/imoveis');
  };

  return (
    <Container ref={node} {...props} onClickCapture={() => setPopup(-1)}>
      <div>
        <img onClick={onClickLogo} src={logo} alt="Logo" />

        {searchable && (
          <Search>
            <input type="text" placeholder="O que você procura?" />
            <MdSearch size={25} color={props.theme.header.search.color} />
          </Search>
        )}

        <div>
          {links.map(link => (
            <button
              type="button"
              className={
                link.to === history.location.pathname ? link.activeClass : ''
              }
              key={link.title}
              onClick={() => link.onClick({ dispatch, history })}
            >
              {link.title}
            </button>
          ))}
        </div>
      </div>

      {!simple && (
        <HeaderFilter popupOpen={popupOpen} setPopupOpen={setPopup} />
      )}
    </Container>
  );
}

Header.propTypes = {
  contranstLight: PropTypes.bool,
  overlay: PropTypes.bool,
  searchable: PropTypes.bool.isRequired,
  simple: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};

Header.defaultProps = {
  contranstLight: false,
  overlay: false,
};

export default withRouter(withTheme(Header));
