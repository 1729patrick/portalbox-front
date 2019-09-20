import React from 'react';
import { useSelector } from 'react-redux';

import image from '~/assets/0ffd8594.jpg';

import { Container } from './styles';

const Contact = () => {
  const company = useSelector(state => state.company);

  return (
    <Container>
      <img src={image} alt="Foto contato" />

      <div>
        <h1>Portalbox Corretor de Imóveis</h1>

        <span>
          Uma empresa que entrega experiência para o cliente com uma plataforma
          que irá aumentar as vendas e gerenciar o marketing de corretores
          autonômos e imóbiliarias. Uma empresa que entrega experiência para o
          cliente com uma plataforma que irá aumentar as vendas e gerenciar o
          marketing de corretores autonômos e imóbiliarias. Uma empresa que
          entrega experiência para o cliente com uma plataforma que irá aumentar
          as vendas e gerenciar o marketing de corretores autonômos e
          imóbiliarias.
        </span>

        <span>
          Rua Primeiro de Maio, 1425, Centro, Bandeirante-SC, 89905-000 -{' '}
          <button>VER NO MAPA</button>
        </span>

        <div>
          {company.phones.map(phone => (
            <p key={phone.number}>{phone.number}</p>
          ))}

          {company.emails.map(email => (
            <p key={email}>{email}</p>
          ))}
        </div>

        {/* <p>CRECI 126-DS-952</p> */}
      </div>
    </Container>
  );
};

export default Contact;
