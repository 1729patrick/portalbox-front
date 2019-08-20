import React, { useState } from 'react';
import { Form, Scope } from '@rocketseat/unform';
import Slider from '~/components/Slider';

import {
  Container,
  Card,
  SubmitButton,
  Images,
  Img,
} from './styles';

import schema from './schema';

import Input from '~/components/Input';
import Select from '~/components/Select';
import Radio from '~/components/Radio';


import ImagesUploader from '~/components/_admin/ImageUploader';


import {
  optionsLocale,
  optionsType,
  optionsParticulars,
} from '~/services/fakeData';

export default function New() {
  const [images, setImages] = useState([]);

  const initialValue = {

    address: {
city: "3",
neighborhood: "2",
street: "asdas",
},

map: {
lat: "",
lng: "",
},
owner:{
cpf: "",
name: "",
whatsapp: "",
},
particulars:{
area: "1312",
bathroom: "4",
bedroom: "3",
garage: "2",
type: "3",
},
price:{
rent: "",
sale: ""
  }};

  const openGoogleMaps = () => {
    // https://www.google.com/maps/place/R.+1%C2%BA+de+Maio,+1425,+Bandeirante+-+SC,+89905-000
    // const address =
    window.open(`https://www.google.com/maps/place/`, '_blank');
  };


  return <ImagesUploader></ImagesUploader>
  return (
    <Container>
      <Form
        onSubmit={data => console.log(data)}
        schema={schema}
        initialData={initialValue}
        onChange={e => console.log(e)}
      >
        <Card >
          <Scope path="address">
          <div>
            <h1>Endereço</h1>
            </div>

            <Input
            type="text"
            name="street"
            label="Rua"
            placeholder="Digite o nome da rua"
          />
          <Input
            type="number"
            name="number"
            label="Número"
            placeholder="Digite o número"
            optional
          />

          <Select
            placeholder="Selecione o bairro"
            options={optionsLocale}
            name="neighborhood"
            label="Bairro"
            multiple={false}
          />

          <Select
            placeholder="Selecione a cidade"
            options={optionsLocale}
            name="city"
            label="Cidade"
            multiple={false}
          />
          </Scope>
        </Card>

        <Card>
          <Scope path="particulars">
          <div>
            <h1>Características</h1>
          </div>

          <Select
            placeholder="Selecione o tipo"
            options={optionsType}
            name="type"
            label="Tipo"
            multiple={false}
          />

          <Radio name="bedroom" label="Quartos" options={optionsParticulars} />

          <Radio
            name="bathroom"
            label="Banheiros"
            options={optionsParticulars}
          />

          <Radio
            name="garage"
            label="Garagens"
            optional
            options={optionsParticulars}
          />

          <Input
            type="number"
            name="area"
            label="Área"
            placeholder="Digite o tamanho do imóvel"
            optional
          />

          <p>Outras características</p>
          </Scope>
        </Card>

        <Card>
          <Scope path="map">
          <div>
            <h1>
              Mapa <p>(Opcional)</p>
            </h1>
            <p>
              Se as coordenadas estiverem vazias não será possível exibir o mapa
              do imóvel no PORTAL DA IMOBILIÁRIA
            </p>
          </div>

          <Input
            type="text"
            name="lat"
            label="Latitude"
            placeholder="Digite a latidode da localização"
          />
          <Input
            type="text"
            name="lng"
            label="Longitude"
            placeholder="Digite a longitude da localização"
          />

          <button type="button" onClick={openGoogleMaps}>
            Buscar coordenadas no Google Maps
          </button>
          </Scope>
        </Card>

        <Card>
          <Scope path="price">
          <div>
            <h1>
              Preço <p>(Opcional)</p>
            </h1>
            <p>
              Imóveis sem preço serão ignorados ao utilizar o filtro de preço no
              PORAL DA IMOBILIÁRIA
            </p>
          </div>

          <Input
            type="number"
            name="sale"
            label="Preço para venda"
            placeholder="Digite o preço para venda"
          />
          <Input
            type="number"
            name="rent"
            label="Preço para locação"
            placeholder="Digite o preço para locação"
          />
          </Scope>
        </Card>

        <Card>
          <Scope path="images">
          <div>
            <h1>Fotos</h1>
            <p>Adicione ao menos uma foto</p>
          </div>

          <Images>
            {images.length ? (
              <Slider>
                {images.map((image, index) => (
                  <Img key={index} src={image} />
                ))}
              </Slider>
            ) : (
              <p>Fazer upload de fotos</p>
            )}
          </Images>
          </Scope>
        </Card>

        <Card >
          <Scope  path="owner">
          <div>
            <h1>
              Proprietário <p>(Opcional)</p>
            </h1>
          </div>

          <Input
            type="text"
            name="name"
            label="Nome"
            placeholder="Digite o nome do proprietário"
          />
          <Input
            type="text"
            name="whatsapp"
            label="Whatsapp"
            placeholder="Digite o número de Whatsapp"
          />
          <Input
            type="text"
            name="cpf"
            label="CPF"
            placeholder="Digite o número do CPF"
          />

          <Input
            type="text"
            name="annotations"
            label="Anotações"
            multiline
            placeholder="Digite algo sobre o responsável"
          />
          </Scope>
        </Card>

        <SubmitButton text="Salvar" />
      </Form>
    </Container>
  );
}
