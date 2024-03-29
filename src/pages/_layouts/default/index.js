import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { Wrapper } from './styles';

const DefaultLayout = ({ children, simple, searchable }) => {
  return (
    <Wrapper simple={simple}>
      <Header simple={simple} searchable={searchable} />
      {children}
      <Footer />
    </Wrapper>
  );
};

DefaultLayout.propTypes = {
  simple: PropTypes.bool.isRequired,
  searchable: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

export default DefaultLayout;
