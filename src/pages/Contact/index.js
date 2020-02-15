import React from 'react';
import { Formik, Form } from 'formik';
import { IoLogoTwitter } from 'react-icons/io';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiPhoneOutline,
  TiMail,
} from 'react-icons/ti';
import { useSelector } from 'react-redux';

import Input from '~/components/Input';

import { Header, Container, Info, SubmitButton, Title } from './styles';

const Contact = () => {
  const company = useSelector(state => state.company);

  return (
    <Container>
      <Header banner={company.banner?.url}>
        <div>
          <h1>Fale agora mesmo com o Portalbox Corretor de Imóveis</h1>
        </div>
      </Header>

      <Title>Nos envie sua mensagem</Title>

      <div>
        <div>
          <Formik
            render={({ values, setFieldValue }) => (
              <Form>
                <Input
                  label="Nome"
                  placeholder="Digite seu nome"
                  value={values.name}
                  setValue={value => setFieldValue('name', value)}
                />
                <Input
                  label="Telefone"
                  placeholder="Digite seu telefone"
                  value={values.phone}
                  setValue={value => setFieldValue('phone', value)}
                />
                <Input
                  label="E-mail"
                  placeholder="Digite seu e-mail"
                  optional
                  value={values.email}
                  setValue={value => setFieldValue('email', value)}
                />
                <Input
                  label="Mensagem"
                  textarea
                  placeholder="Digite sua mensagem"
                  value={values.message}
                  setValue={value => setFieldValue('message', value)}
                />

                <SubmitButton text="Enviar" />
              </Form>
            )}
          />
        </div>

        <Info>
          <div>
            Atendimento de Segunda à Sexta das 08h às 12h e das 13h às 18h
          </div>

          <div>
            {company.phones.map(phone => (
              <p key={phone.number}>
                <TiPhoneOutline size={20} color="#162962" />
                {phone.number} - {phone.description}
              </p>
            ))}

            {company.emails.map(({ email, type }) => (
              <p key={email}>
                <TiMail size={20} color="#162962" />
                {email} - {type.name}
              </p>
            ))}
          </div>

          <div>
            {company.address.street},{' '}
            {company.address.number ? `${company.address.number}, ` : ''}
            {company.address.neighborhood.name}, {company.address.city.name}
            -PT, {company.address.cep}
          </div>
          <div>
            <button>
              <TiSocialFacebook color="#162962" size={25} />
            </button>
            <button>
              <TiSocialLinkedin color="#162962" size={25} />
            </button>
            <button>
              <IoLogoTwitter color="#162962" size={25} />
            </button>
            <button>
              <FaWhatsapp color="#162962" size={25} />
            </button>
            <button>
              <FaInstagram color="#162962" size={25} />
            </button>
          </div>
        </Info>
      </div>
    </Container>
  );
};

export default Contact;
