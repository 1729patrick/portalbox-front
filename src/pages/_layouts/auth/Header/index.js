import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdAccountCircle, MdArrowDropDown } from 'react-icons/md';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <div>
        <div>
          <h1>portalbox</h1>
          {/* <img src={box} alt="" /> */}
        </div>

        <aside>
          <div>
            <NavLink to="/portal" exact activeClassName="active">
              Inicio
            </NavLink>
            <NavLink to="/portal/imoveis" activeClassName="active">
              Imóveis
            </NavLink>
            <NavLink to="/portal/banners" activeClassName="active">
              Banners
            </NavLink>
            <NavLink to="/portal/configuracoes" activeClassName="active">
              Configurações
            </NavLink>
          </div>

          <MdAccountCircle size={33} color="rgb(239, 108, 0)" />
          <MdArrowDropDown size={25} color="rgb(239, 108, 0)" />
        </aside>
      </div>
    </Container>
  );
}
