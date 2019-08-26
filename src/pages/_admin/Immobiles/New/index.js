import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Scope } from '@rocketseat/unform';

import { Container, Card, SubmitButton } from './styles';

import CreateImmobileSchema from '~/schemas/CreateImmobileSchema';

import Input from '~/components/Input';
import Select from '~/components/Select';
import Radio from '~/components/Radio';

import ImagesUploader from '~/components/_admin/ImageUploader';

import { optionsParticulars } from '~/services/fakeData';

export default function New() {
  const types = useSelector(state => state.core.types);
  const cities = useSelector(state => state.core.cities);

  const initialValue = {
    address: {
      city: '5d62d8f7d913533aa88fcb9b',
      neighborhood: '5d62b707943c5917ae5879a7',
      street: 'asdas',
    },

    map: {
      lat: '',
      lng: '',
    },
    owner: {
      cpf: '',
      name: '',
      whatsapp: '',
    },
    particulars: {
      area: '1312',
      bathroom: '4',
      bedroom: '3',
      garage: '2',
      type: '5d61f08c3be9865134c092c1',
    },
    price: {
      rent: '',
      sale: '',
    },
    images: [],
  };

  const openGoogleMaps = () => {
    // https://www.google.com/maps/place/R.+1%C2%BA+de+Maio,+1425,+Bandeirante+-+SC,+89905-000
    // const address =
    window.open(`https://www.google.com/maps/place/`, '_blank');
  };

  return (
    <Container>
      <Form
        onSubmit={data => console.log(data)}
        schema={CreateImmobileSchema}
        initialData={initialValue}
      >
        <Card>
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
              options={cities}
              name="city"
              label="Cidade"
              multiple={false}
            />

            <Select
              placeholder="Selecione o bairro"
              options={cities}
              name="neighborhood"
              label="Bairro"
              multiple={false}
              groupedData
              keys={{
                label: 'name',
                options: 'neighborhoods',
                option: 'name',
                value: '_id',
              }}
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
              options={types}
              name="type"
              label="Tipo"
              multiple={false}
            />

            <Radio
              name="bedroom"
              label="Quartos"
              options={optionsParticulars}
              optional
            />

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

            {/* <p>Outras características</p> */}
          </Scope>
        </Card>

        <Card>
          <Scope path="map">
            <div>
              <h1>
                Mapa <p>(Opcional)</p>
              </h1>
              <p>
                Se as coordenadas estiverem vazias não será possível exibir o
                mapa do imóvel no PORTAL DA IMOBILIÁRIA
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
                Imóveis sem preço serão ignorados ao utilizar o filtro de preço
                no PORAL DA IMOBILIÁRIA
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
          <div>
            <h1>Fotos</h1>
            <p>Adicione ao menos uma foto</p>
          </div>

          <ImagesUploader name="images" />
        </Card>

        <Card>
          <Scope path="owner">
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
