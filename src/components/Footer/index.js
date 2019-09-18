import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Copyright, FooterWrapper } from './styles';

import { links } from '~/services/fakeData';

export default function Footer() {
  const dispatch = useDispatch();
  const company = useSelector(state => state.company);

  return (
    <FooterWrapper>
      <Container>
        <div>
          <img src={company.logo} alt="Logo" />
          <span>
            {company.phones.map(phone => (
              <p key={phone.number}>{phone.number}</p>
            ))}

            {company.emails.map(email => (
              <p key={email}>{email}</p>
            ))}
          </span>
        </div>

        <ul>
          {links.map(link => (
            <li key={link.title} onClick={() => link.onClick({ dispatch })}>
              {link.title}
            </li>
          ))}
        </ul>
      </Container>

      <Copyright>
        <span>
          <p>
            <b>{company.name}</b> - CRECI {company.creci} -{' '}
            {company.address.street},{' '}
            {company.address.number ? `${company.address.number}, ` : ''}
            {company.address.neighborhood}, {company.address.city}-SC,{' '}
            {company.address.cep} - <b>Ver no mapa</b>
          </p>
        </span>

        <p>
          DESENVOLVIDO POR: <b>PORTALBOX</b>
        </p>
      </Copyright>
    </FooterWrapper>
  );
}
