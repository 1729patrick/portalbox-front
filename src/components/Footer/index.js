import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IoLogoTwitter } from 'react-icons/io';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiPhoneOutline,
  TiMail,
} from 'react-icons/ti';

import { Container, Copyright, FooterWrapper, Socials } from './styles';

import { links } from '~/services/fakeData';

const Footer = ({ history }) => {
  const dispatch = useDispatch();
  const company = useSelector(state => state.company);

  return (
    <FooterWrapper>
      <Container>
        <div>
          <Socials>
            <img src={company.logo} alt="Logo" />

            <div>
              <button>
                <TiSocialFacebook color="#162962" size={20} />
              </button>
              <button>
                <TiSocialLinkedin color="#162962" size={20} />
              </button>
              <button>
                <IoLogoTwitter color="#162962" size={20} />
              </button>
              <button>
                <FaWhatsapp color="#162962" size={20} />
              </button>
              <button>
                <FaInstagram color="#162962" size={20} />
              </button>
            </div>
          </Socials>

          <div>
            <div>
              <span>
                Atendimento de Segunda à Sexta das 08h às 12h e das 13h às 18h
              </span>
            </div>
            <div>
              {company.phones.map(phone => (
                <p key={phone.number}>
                  <TiPhoneOutline size={20} color="#162962" />
                  {phone.number}
                </p>
              ))}

              {company.emails.map(email => (
                <p key={email}>
                  <TiMail size={20} color="#162962" />
                  {email}
                </p>
              ))}
            </div>
            <div>
              <p>
                {company.address.street},{' '}
                {company.address.number ? `${company.address.number}, ` : ''}
                {company.address.neighborhood}, {company.address.city}-SC,{' '}
                {company.address.cep}
              </p>
            </div>
          </div>
        </div>
        <ul>
          {links.map(link => (
            <li
              key={link.title}
              onClick={() => link.onClick({ dispatch, history })}
            >
              {link.title}
            </li>
          ))}
        </ul>
      </Container>

      <Copyright>
        <span>
          <p>
            <b>{company.name}</b> - CRECI {company.creci}
            {/* -{' '} */}
            {/* {company.address.street},{' '}
            {company.address.number ? `${company.address.number}, ` : ''}
            {company.address.neighborhood}, {company.address.city}-SC,{' '}
            {company.address.cep} - <b>Ver no mapa</b> */}
          </p>
        </span>

        <p>
          DESENVOLVIDO POR: <b>PORTALBOX</b>
        </p>
      </Copyright>
    </FooterWrapper>
  );
};

export default withRouter(Footer);
