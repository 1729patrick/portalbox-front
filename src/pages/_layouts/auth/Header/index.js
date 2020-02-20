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
        </div>

        <aside>
          <div>
            <NavLink to="/portal" exact>
              Inicio
            </NavLink>
            <NavLink to="/portal/imoveis">Imóveis</NavLink>
            <NavLink to="/portal/banners">Banners</NavLink>
            <NavLink to="/portal/configuracoes">Configurações</NavLink>
          </div>

          <MdAccountCircle size={33} color="rgb(239, 108, 0)" />
          <MdArrowDropDown size={25} color="rgb(239, 108, 0)" />
        </aside>
      </div>
    </Container>
  );
}
