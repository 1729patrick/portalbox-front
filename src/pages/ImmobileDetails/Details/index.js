import React, { useMemo } from 'react';

import { Container, Particulars } from './styles';

import bed from '~/assets/carac/bed.svg';
import car from '~/assets/carac/car.svg';
import move from '~/assets/carac/move.svg';
import shower from '~/assets/carac/shower.svg';

export default function Details({ openPreview, immobile }) {
  console.log(immobile)
  const address = useMemo(() => {
    console.log(immobile);
    const { address } = immobile;

    const number = address.number ? `, ${address.number}` : '';
    const neighborhood = address.neighborhood
      ? `, ${address.neighborhood.name}`
      : '';
    const city = address.city ? `${address.city.name} - ` : '';

    return `${address.street}${neighborhood}${number} - ${city}SC`;
  }, [immobile]);

  const title = useMemo(()=> {
    return 'Apartamento com 3 quartos para Alugar, 153 m² por R$ 6.000/Mês'
  }, [])
  
  return (
    <Container>
      <h2>{title}</h2>

      <h3>
        {address}
        <span onClick={openPreview}>Ver no mapa</span>
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
    </Container>
  );
}
