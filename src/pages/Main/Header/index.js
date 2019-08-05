import React from 'react';

import logo from '~/assets/logo.png';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo" />

      <ul>
        <li>Anunciar meu imóvel</li>
        <li>Clientes</li>
        <li>Empreendimentos</li>
        <li>Índices</li>
        <li>Quem somos</li>
        <li>Contato</li>
      </ul>
    </Container>
  );
}
