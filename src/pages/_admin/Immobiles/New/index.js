import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Scope } from '@rocketseat/unform';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { Container, Card, SubmitButton, Configuration } from './styles';

import CreateImmobileSchema from '~/schemas/CreateImmobileSchema';

import Input from '~/components/Input';
import Select from '~/components/Select';
import Radio from '~/components/Radio';

import ImagesUploader from '~/components/_admin/ImageUploader';

import { optionsParticulars, sessionsImmobiles } from '~/services/fakeData';

import {createImmobilesRequest } from '~/store/modules/immobiles/actions'

import Checkbox from '~/components/Checkbox';

export default function New() {
  const dispatch = useDispatch()

  const types = useSelector(state => state.core.types);
  const cities = useSelector(state => state.core.cities);
  const [images, setImages] = useState([])
  const [sessions, setSessions] = useState([])

  const handleSessionChange = (_id)=> {
    const index = sessions.indexOf(_id) ;
      if(index=== -1){
        return setSessions([...sessions, _id])
      }

      setSessions(sessions.filter((_, i) => i !==index))
  }


  const openGoogleMaps = () => {
    // https://www.google.com/maps/place/R.+1%C2%BA+de+Maio,+1425,+Bandeirante+-+SC,+89905-000
    // const address =
    window.open(`https://www.google.com/maps/place/`, '_blank');
  };

  return (
    <Container>
      <Form
        onSubmit={data => dispatch(createImmobilesRequest({...data, sessions}, images))}
        schema={CreateImmobileSchema}
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
              optional
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
               imóvel no mapa do PORTAL
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
                no PORAL
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

          <ImagesUploader name="images" onSave={setImages}/>
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

        <Card>
          <Scope path="owner">
            <div>
              <h1>
                Configuração <p>(Opcional)</p>
              </h1>

              <p>O imóvel deve ser listado em qual sessão no PORTAL?</p>
            </div>


      <Configuration>
          {sessionsImmobiles.map(type => (
          <FormControlLabel
            key={type.name}
            control={
              <Checkbox
                checked={sessions.indexOf(type._id) !== -1}
                onChange={()=> handleSessionChange(type._id)}
                value={type._id}
              />
            }
            label={type.name}
          />
        ))}
        </Configuration>
</Scope>
        </Card>


        <SubmitButton text="Salvar" />
      </Form>
    </Container>
  );
}
