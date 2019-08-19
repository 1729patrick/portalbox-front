import React from 'react';
import { Form } from '@rocketseat/unform';
import Slider from 'react-slick';

import SliderArrow from '~/components/SliderArrow';

import {
  Container,
  Card,
  SubmitButton,
  SelectImagesButton,
  Images,
  Img
} from './styles';

import Input from '~/components/Input';

const settings = {
  infinite: false,
  dots: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  initialSlide: 0,
  nextArrow: <SliderArrow next />,
  prevArrow: <SliderArrow prev />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 470,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function New() {
  return (
    <Container>
      <Card>
        <h1>Endereço</h1>

        <Form>
          <Input
            type="text"
            name="address"
            label="Rua"
            placeholder="Digite o nome da rua"
          />
          <Input
            type="text"
            name="number"
            label="Número"
            placeholder="Digite o número"
            optional
          />
          <Input
            type="text"
            name="bairro"
            label="Bairro"
            placeholder="Digite o nome bairro"
          />
          <Input
            type="text"
            name="city"
            label="Cidade"
            placeholder="Digite o nome da cidade"
          />
        </Form>
      </Card>

      <Card>
        <h1>Características</h1>

        <Form>
          <Input
            type="text"
            name="address"
            label="Tipo"
            placeholder="Selecione o tipo do imóvel"
          />

          <Input
            type="text"
            name="address"
            label="Quartos"
            placeholder="Digite a quantidade de quartos"
          />
          <Input
            type="text"
            name="number"
            label="Banheiros"
            placeholder="Digite a quantidade de banheiros"
          />
          <Input
            type="text"
            name="bairro"
            label="Garagens"
            placeholder="Digite a quantidade de garagens"
            optional
          />
          <Input
            type="text"
            name="city"
            label="Área"
            placeholder="Digite o tamanho do imóvel"
            optional
          />
        </Form>

        <p>Outras características</p>
      </Card>

      <Card>
        <h1>
          Mapa <span>(Opcional)</span>
        </h1>
        <span>
          Se as coordenadas estiverem vazias não será possível exibir o mapa do
          imóvel no PORTAL DA IMOBILIÁRIA
        </span>

        <Form>
          <Input
            type="text"
            name="address"
            label="Latitude"
            placeholder="Digite a latidode da localização"
          />
          <Input
            type="text"
            name="number"
            label="Longitude"
            placeholder="Digite a longitude da localização"
          />
        </Form>

        <p>Buscar coordenadas no Google Maps</p>
      </Card>

      <Card>
        <h1>
          Preço <span>(Opcional)</span>
        </h1>
        <span>
          Imóveis sem preço serão ignorados ao utilizar o filtro de preço no
          PORAL DA IMOBILIÁRIA
        </span>

        <Form>
          <Input
            type="text"
            name="address"
            label="Preço para venda"
            placeholder="Digite o preço para venda"
          />
          <Input
            type="text"
            name="number"
            label="Preço para locação"
            placeholder="Digite o preço para locação"
          />
        </Form>
      </Card>
      <Card>
        <h1>Fotos</h1>
        <Images>
          <Slider {...settings}>
            <Img></Img>
            <Img></Img>
            <Img></Img>
            <Img></Img>
            <Img></Img>
            <Img></Img>
            <Img></Img>
            <Img></Img>
            <Img></Img>
            <Img></Img>
          </Slider>
        </Images>
        <SelectImagesButton text="Fazer upload de fotos" />
      </Card>

      <Card>
        <h1>
          Proprietário <span>(Opcional)</span>
        </h1>

        <Form>
          <Input
            type="text"
            name="address"
            label="Nome"
            placeholder="Digite o nome do proprietário"
          />
          <Input
            type="text"
            name="number"
            label="Whatsapp"
            placeholder="Digite o número de Whatsapp"
          />
          <Input
            type="text"
            name="number"
            label="CPF"
            placeholder="Digite o número do CPF"
          />

          <Input
            type="text"
            name="number"
            label="Observações"
            multiline
            placeholder="Digite a observação sobre o responsável"
          />
        </Form>
      </Card>

      <SubmitButton text="Salvar" />
    </Container>
  );
}
