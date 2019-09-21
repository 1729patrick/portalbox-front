import React from 'react';
import { Formik, Form } from 'formik';
import { IoLogoTwitter } from 'react-icons/io';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { TiSocialFacebook, TiSocialLinkedin } from 'react-icons/ti';
import { useSelector } from 'react-redux';

import Input from '~/components/Input';

import { Header, Container, Info, SubmitButton, Title } from './styles';

const Contact = () => {
  const company = useSelector(state => state.company);

  return (
    <Container>
      <Header banner={company.banner}>
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
          <span>
            Rua Primeiro de Maio, 1425, Centro, Bandeirante-SC, 89905-000 -{' '}
            <button>VER NO MAPA</button>
          </span>

          <div>
            <span>
              {company.phones.map(phone => (
                <p key={phone.number}>{phone.number}</p>
              ))}

              {company.emails.map(email => (
                <p key={email}>{email}</p>
              ))}
            </span>
            <span>
              Atendimento de Segunda à Sexta das 08h às 12h e das 13h às 18h.
            </span>
          </div>

          <span>
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
          </span>

          {/* <p>CRECI 126-DS-952</p> */}
        </Info>
      </div>
    </Container>
  );
};

export default Contact;
