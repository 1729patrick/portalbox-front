import React from 'react';
import { MdAccountCircle, MdArrowDropDown } from 'react-icons/md';

import { Container, Header } from './styles';

export default function AuthLayout() {
  return (
    <Container>
      <Header>
        <div>
          <h1>portalbox</h1>
          {/* <img src={box} alt="" /> */}
        </div>

        <div>
          <ul>
            <li>Início</li>
            <li>Imóveis</li>
            <li>Banners</li>
            <li>Configurações</li>
          </ul>

          <MdAccountCircle size={33} color="rgb(239, 108, 0)" />
          <MdArrowDropDown size={25} color="rgb(239, 108, 0)" />
        </div>
      </Header>
    </Container>
  );
}
