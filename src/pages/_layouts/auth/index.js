import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import Header from './Header';

export default function AuthLayout({ children }) {
  return (
    <Container>
      <Header />

      {children}
    </Container>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
