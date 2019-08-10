import React from 'react';

import { Container, Copyright } from './styles';

export default function Footer() {
  return (
    <>
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
          </span>
        </div>

        <ul>
          <li>Anunciar meu imóvel</li>
          <li>Área do cliente</li>
          <li>Empreendimentos</li>
          <li>Índices</li>
          <li>Quem somos</li>
        </ul>
      </Container>

      <Copyright>
        <span>
          <p>
            <b>ATMA IMOBILIARIA</b>- CRECI 0425 J - RUA XV DE NOVEMBRO, 1081 -
            CEP: 89900-000 - SÃO MIGUEL DO OESTE - SC
          </p>
        </span>

        <p>
          DESENVOLVIDO POR: <b>PATRICK BATTISTI</b>
        </p>
      </Copyright>
    </>
  );
}
