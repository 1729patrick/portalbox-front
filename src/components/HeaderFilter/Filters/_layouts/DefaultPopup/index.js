import React from 'react';
import PropTypes from 'prop-types';

import { Container, Footer } from './styles';

export default function DefaultFilter({ label, children }) {
  return (
    <Container>
      <label>{label}</label>

      {children}

      <Footer>
        <button type="button">Limpar</button>
        <button type="button">Salvar</button>
      </Footer>
    </Container>
  );
}

DefaultFilter.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
