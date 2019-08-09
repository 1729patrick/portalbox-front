import React from 'react';
import {
  Container,
  Infos,
  Button,
  Highlighter,
  Particulars,
  Simulation,
  Details,
  Value,
  Images,
} from './styles';

import bed from '~/assets/carac/bed.svg';
import car from '~/assets/carac/car.svg';
import move from '~/assets/carac/move.svg';
import shower from '~/assets/carac/shower.svg';

export default function PlaceDetails() {
  return (
    <Container>
      <div style={{padding: '0 80px', height: '400px'}}>
      <Images />
      </div>

      <Infos>
        <Details>
          <h2>
            Apartamento com 3 quartos para Alugar, 153 m² por R$ 6.000/Mês
          </h2>

          <h3>
            Rua Maria Lúcia da Paz - Gleba Fazenda Palhano, Londrina - PR
            <span>Ver no mapa</span>
          </h3>

          <Particulars>
            <h2>Características</h2>

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
                <p>150m²</p>
              </li>
            </ul>

            <div>
              <p>Churrasqueira</p>
              <p>Gás Encanado</p>
              <p>Hidromassagem</p>
              <p>Imóvel de esquina</p>
              <p>Janela grande</p>
              <p>Janela de alumínio</p>
              <p>Piso laminado </p>
              <p>Porcelanato Sala</p>
              <p>Sala grande</p>
            </div>
          </Particulars>
        </Details>

        <Value>
          <h4>
            <Highlighter>Aluguel</Highlighter>
            R$ 6.000/Mês
          </h4>

          <ul>
            <li>
              <span>IPTU</span>
              <span>R$ 52,00</span>
            </li>

            <li>
              <span>Condomínio</span>
              <span>R$ 52,00</span>
            </li>
          </ul>

          <h4>
            <Highlighter>Venda</Highlighter>
            R$ 600.000
          </h4>

          <ul>
            <li>
              <span>IPTU</span>
              <span>R$ 52,00</span>
            </li>

            <li>
              <span>Condomínio</span>
              <span>R$ 52,00</span>
            </li>
          </ul>

          <Button text="Tenho interesse" />
        </Value>
      </Infos>

      <Simulation>
        <h2>Simule um financiamento</h2>
      </Simulation>
    </Container>
  );
}
