import React from 'react';

import { Container, Copyright, FooterWrapper } from './styles';

import { links } from '~/services/fakeData';

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <div>
          <img
            src="http://fotos.sitemidas.com.br/per_corr/logos/logoGeral1221.png"
            alt="Logo"
          />
          <span>
            <p>(49) 9 91118313</p>
            <p>(49) 9 91118313</p>
            <p>(49) 9 91118313</p>
            <p>(49) 9 91118313</p>
            <p>contato@atma.com.br</p>
          </span>
        </div>

        <ul>
          {links.map(link => (
            <li key={link.title}>{link.title}</li>
          ))}
        </ul>
      </Container>

      <Copyright>
        <span>
          <p>
            <b>ATMA IMOBILIARIA</b>- CRECI 0425 - Rua Capote Valente, 39 -
            Pinheiros, São Paulo - SP, 05409-000 - <b>Ver no mapa</b>
          </p>
        </span>

        <p>
          DESENVOLVIDO POR: <b>PATRICK BATTISTI</b>
        </p>
      </Copyright>
    </FooterWrapper>
  );
}
