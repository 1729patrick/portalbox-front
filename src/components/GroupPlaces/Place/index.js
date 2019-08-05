import React from 'react';

import { Container, Image, Details } from './styles';

import bed from '~/assets/carac/bed.svg';
import car from '~/assets/carac/car.svg';
import move from '~/assets/carac/move.svg';
import shower from '~/assets/carac/shower.svg';

export default function Place() {
  return (
    <Container>
      <Image source="https://a0.muscache.com/im/pictures/515b9882-cb96-4ad1-b1d4-c1f200a359cc.jpg?aki_policy=large" />

      <Details>
        <span>
          <h4>Apartamento</h4>
          <p>R$ 1720,00/mês</p>
        </span>

        <p>Rua Maria Lúcia da Paz - Gleba Fazenda Palhano, Londrina - PR</p>

        <ul>
          <li>
            <img src={bed} alt="Quartos" />
            <p>3 quartos</p>
          </li>
          <li>
            <img src={car} alt="Garagem" />
            <p>1 vaga</p>
          </li>
          <li>
            <img src={shower} alt="Banheiros" />
            <p>2 banheiros</p>
          </li>
          <li>
            <img src={move} alt="Área" />
            <p>150m</p>
          </li>
        </ul>
      </Details>
    </Container>
  );
}
