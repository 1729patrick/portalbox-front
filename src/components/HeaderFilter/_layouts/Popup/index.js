import React from 'react';
import PropTypes from 'prop-types';

import { Container, Footer } from './styles';

export default function PopupLayout({ label, children }) {
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

PopupLayout.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
