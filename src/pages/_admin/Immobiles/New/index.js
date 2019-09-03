import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from '@rocketseat/unform';

import { Container, Card, SubmitButton } from './styles';

import CreateImmobileSchema from '~/schemas/CreateImmobileSchema';

import ImagesUploader from '~/components/_admin/ImageUploader';

import { createImmobilesRequest } from '~/store/modules/immobiles/actions';


import ParticularsPicker from './Picker/Particulars';

import Address from './Cards/Address';
import Particulars from './Cards/Particulars';
import Map from './Cards/Map';
import Price from './Cards/Price';
import Owner from './Cards/Owner';
import Config from './Cards/Config';


const initialData = {"config":{},"owner":{"cpf":"","whatsapp":"","name":""},"images":[],"price":{"rent":null,"sale":null},"map":{"lng":null,"lat":null},"type":"5d61f08c3be9865134c092c1","particulars":{"academy":true},"address":{"neighborhood":"5d62b707943c5917ae5879a7","city":"5d62b707943c5917ae5879a6","number":1425,"street":"Rua Primeiro de Maio"}}

export default function New() {
  const dispatch = useDispatch();

  const [images, setImages] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [showPicker, setShowPicker] = useState(null);

  const [particulars, setParticulars] = useState(initialData);

  /**
   * Tipos do imóvel no porta [Destaque de *, Novos]
   *
   * @param {* id da categoria} _id
   */
  const handleSessionChange = _id => {
    const index = sessions.indexOf(_id);
    if (index === -1) {
      return setSessions([...sessions, _id]);
    }

    setSessions(sessions.filter((_, i) => i !== index));
  };

const handleSaveParticulars = (data)=> {
  console.log(JSON.parse(JSON.stringify(data), true))
  setParticulars(data)
  setShowPicker(null)
}

  return (
    <Container>
      <Form
        onSubmit={data =>
          // dispatch(createImmobilesdataRequest({ ..., sessions }, images))
          console.log(JSON.stringify(data))
        }
        initialData={initialData}
        schema={CreateImmobileSchema}
      >
        <Card>
          <Address />
        </Card>

        <Card>
          <Particulars
          onOpenPicker={() => setShowPicker('particularsPicker')}

          />
        </Card>

        <Card>
          <Map />
        </Card>

        <Card>
          <Price
           onOpenPicker={() => setShowPicker('pricePicker')}
           onClosePicker={() => setShowPicker(null)}
           openPicker={showPicker=== 'pricePicker'}
          ></Price>
        </Card>

        <Card>
          <div>
            <h1>Fotos</h1>
            <p>Adicione ao menos uma foto</p>
          </div>

          <ImagesUploader name="images" onSave={setImages} />
        </Card>

        <Card>
          <Owner></Owner>
        </Card>

        <Card>
          <Config
            sessions={sessions}
            handleSessionChange={handleSessionChange}
           />
        </Card>

        <SubmitButton text="Salvar" />
      </Form>

      <ParticularsPicker
      initialData={particulars}
       onClose={() => setShowPicker(null)}
          open={showPicker === 'particularsPicker'}
          onSave={handleSaveParticulars}
          />
    </Container>
  );
}
