import React from 'react';

import HeaderFilter from '~/components/HeaderFilter';
import { Container } from './styles';

export default function Header() {
  return (
    <>
      <Container>
        <div>
          <img
            src="https://www.inovarimoveis.imb.br/assets/images/logo.png"
            alt="Logo"
          />

          <input type="text" placeholder="O que você procura?" />
        </div>

        <ul>
          <li>Anunciar meu imóvel</li>
          <li>Clientes</li>
          <li>Quem somos</li>
          <li>Contato</li>
        </ul>
      </Container>

      <HeaderFilter />
    </>
  );
}
