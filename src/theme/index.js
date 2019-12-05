import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '~/styles/global';

import Loading from '~/components/Loading';

import { signInVisitorRequest } from '~/store/modules/auth/actions';

export default function Theme({ children }) {
  const dispatch = useDispatch();
  const colors = useSelector(state => state.theme.colors);

  useEffect(() => {
    dispatch(signInVisitorRequest());
  }, [dispatch]);

  if (!colors) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={colors}>
      <Fragment>
        {children}
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  );
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};
