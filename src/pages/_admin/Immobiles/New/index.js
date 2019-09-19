import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';

import { Container, SubmitButton } from './styles';

import CreateImmobileSchema from '~/schemas/CreateImmobileSchema';

import { createImmobilesRequest } from '~/store/modules/immobiles/actions';

import ParticularsPicker from './Picker/Particulars';
import RatesPicker from './Picker/Rates';

import Address from './Cards/Address';
import Particulars from './Cards/Particulars';
import Map from './Cards/Map';
import Price from './Cards/Price';
import Images from './Cards/Images';
import Owner from './Cards/Owner';
import Config from './Cards/Config';

const initialData = {
  rates: { condominium: '1', iptu: '2', fireInsurance: '4' },
  config: {
    sessions: [
      { name: 'Novos', _id: 1, key: 'news' },
      { name: 'Destaques de venda', _id: 2, key: 'saleHighlights' },
      { name: 'Destaques de locação', _id: 3, key: 'rentalHighlights' },
      { name: 'Ofertas da semana', _id: 4, key: 'offersOfWeek' },
    ],
  },
  owner: {
    cpf: '312312312',
    whatsapp: '22256256256625256256',
    name: 'Patrick Battisti',
    annotations: 'asdkmasmkdas',
  },
  images: [],
  price: { rent: '0', sale: 500000 },
  map: { lng: 20, lat: 20 },
  type: '5d61f08c3be9865134c092c1',
  particulars: {
    bedroom: '3',
    bathroom: '4',
    garage: '2',
    totalArea: '1500',
    type: {
      _id: '5d744dab68634c086bd78a22',
      name: 'Apartamento',
      image:
        'http://localhost:3333/static/files/f503a939f6cfbcc08e42f1eaac63e0f2.jpg',
    },
  },
  address: {
    neighborhood: { _id: '5d62b707943c5917ae5879a9', name: 'Agostini' },
    city: {
      neighborhoods: [
        { _id: '5d62b829685c7e1a6244106e', name: 'Centro' },
        { _id: '5d62b829685c7e1a6244106f', name: 'São Jorge' },
        { _id: '5d62b829685c7e1a62441070', name: 'Agostini' },
      ],
      _id: '5d62b829685c7e1a6244106d',
      name: 'Maravilha',
    },
    number: 1425,
    street: 'Rua Primeiro de Maio',
  },
  allParticulars: {
    academy: 'true',
    gourmetSpace: 'true',
    partyRoom: 'true',
    airConditioning: '3',
    balconie: '',
    buildingArea: '',
  },
  sessions: [],
};

export default function New() {
  const dispatch = useDispatch();

  const [showPicker, setShowPicker] = useState(null);

  const [particulars, setParticulars] = useState(initialData);
  const [rates, setRates] = useState(initialData);

  const handleSaveParticulars = data => {
    setParticulars(data);
    setShowPicker(null);
  };

  const handleSaveRates = data => {
    setRates(data);
    setShowPicker(null);
  };

  return (
    <Container>
      <Formik
        initialValues={initialData}
        onSubmit={data => console.log(JSON.stringify(data))}
        render={({ values, setFieldValue, resetForm }) => (
          <Form>
            <Address values={values} setFieldValue={setFieldValue} />

            <Particulars
              onOpenPicker={() => setShowPicker('particularsPicker')}
              values={values}
              setFieldValue={setFieldValue}
            />

            <Map values={values} setFieldValue={setFieldValue} />

            <Price
              onOpenPicker={() => setShowPicker('ratesPicker')}
              onClosePicker={() => setShowPicker(null)}
              openPicker={showPicker === 'ratesPicker'}
              values={values}
              setFieldValue={setFieldValue}
            />

            <Images />

            <Owner values={values} setFieldValue={setFieldValue} />

            <Config values={values} setFieldValue={setFieldValue} />

            <SubmitButton text="Salvar" type="submit" />

            <ParticularsPicker
              initialData={particulars}
              onClose={() => setShowPicker(null)}
              open={showPicker === 'particularsPicker'}
              onSave={handleSaveParticulars}
              path="allParticulars"
            />

            <RatesPicker
              initialData={rates}
              onClose={() => setShowPicker(null)}
              open={showPicker === 'ratesPicker'}
              onSave={handleSaveRates}
              path="rates"
            />
          </Form>
        )}
      />
    </Container>
  );
}
