import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';

import { Container, SubmitButton } from './styles';

import CreateImmobileSchema from '~/schemas/CreateImmobileSchema';

import { createImmobilesRequest } from '~/store/modules/immobiles/actions';

import ParticularsPicker from './Pickers/Particulars';
import RatesPicker from './Pickers/Rates';

import Address from './Cards/Address';
import Particulars from './Cards/Particulars';
import Map from './Cards/Map';
import Price from './Cards/Price';
import Images from './Cards/Images';
import Owner from './Cards/Owner';
import Config from './Cards/Config';

const initialData = {
  address: {},
  particulars: {},
  map: {},
  price: {},
  owner: {},
  config: {},
  allParticulars: {},
  rates: {},
  images: [],
};
// const initialData = {
//   address: {
//     street: 'Rua Primeiro de maio',
//     city: {
//       neighborhoods: [
//         { _id: '5d62b707943c5917ae5879a7', name: 'Centro' },
//         { _id: '5d62b707943c5917ae5879a8', name: 'São Jorge' },
//         { _id: '5d62b707943c5917ae5879a9', name: 'Agostini' },
//       ],
//       _id: '5d62b707943c5917ae5879a6',
//       name: 'São Miguel do Oeste',
//     },
//     neighborhood: { _id: '5d62b707943c5917ae5879a7', name: 'Centro' },
//     number: '561515',
//   },
//   particulars: {
//     bedroom: 4,
//     bathroom: 4,
//     garage: 3,
//     totalArea: '2561',
//     academy: true,
//     garden: true,
//     partyRoom: true,
//     airConditioning: 4,
//     furnished: true,
//     watchman: true,
//     balconie: 5,
//     office: true,
//     diningRoom: true,
//     buildingArea: '100',
//   },
//   map: { lat: '500', lng: '600' },
//   price: { sale: '500', rent: '0' },
//   owner: {
//     name: 'Patrick battisti',
//     whatsapp: '5526256256',
//     cpf: '526562562',
//     annotations: '652256256',
//   },
//   config: {
//     sessions: [
//       { name: 'Novos', _id: 1, key: 'news' },
//       { name: 'Destaques de locação', _id: 3, key: 'rentalHighlights' },
//       { name: 'Ofertas da semana', _id: 4, key: 'offersOfWeek' },
//       { name: 'Destaques de venda', _id: 2, key: 'saleHighlights' },
//     ],
//   },
//   allParticulars: {
//     academy: true,
//     garden: true,
//     partyRoom: true,
//     airConditioning: 4,
//     furnished: true,
//     watchman: true,
//     balconie: 5,
//     office: true,
//     diningRoom: true,
//     buildingArea: '100',
//   },
//   rates: {},
//   images: [
//     {
//       path: 'Screen Shot 2019-09-01 at 09.12.33.png',
//       description: 'Screen Shot 2019-09-01 at 09.12.33',
//       file: 'blob:http://localhost:3000/880bd11c-75ab-4f50-92e0-c01c6371f31b',
//       id: '4793',
//       image: { path: 'Screen Shot 2019-09-01 at 09.12.33.png' },
//     },
//   ],
//   type: {
//     _id: '5d744db468634c086bd78a23',
//     name: 'Casa',
//     image:
//       'http://localhost:3333/static/files/f503a939f6cfbcc08e42f1eaac63e0f2.jpg',
//   },
// };

export default function New() {
  const dispatch = useDispatch();

  const [showPicker, setShowPicker] = useState(null);

  return (
    <Container>
      <Formik
        validateOnChange={false}
        initialValues={initialData}
        onSubmit={data => dispatch(createImmobilesRequest(data))}
        validationSchema={CreateImmobileSchema}
        render={({ values, setFieldValue, errors }) => (
          <Form>
            {console.log(errors)}
            <Address
              values={values}
              setFieldValue={setFieldValue}
              errors={errors}
            />

            <Particulars
              onOpenPicker={() => setShowPicker('particularsPicker')}
              values={values}
              setFieldValue={setFieldValue}
              errors={errors}
            />

            <Map values={values} setFieldValue={setFieldValue} />

            <Price
              onOpenPicker={() => setShowPicker('ratesPicker')}
              onClosePicker={() => setShowPicker(null)}
              openPicker={showPicker === 'ratesPicker'}
              values={values}
              setFieldValue={setFieldValue}
            />

            <Images
              values={values}
              setFieldValue={setFieldValue}
              errors={errors}
            />

            <Owner values={values} setFieldValue={setFieldValue} />

            <Config values={values} setFieldValue={setFieldValue} />

            <SubmitButton text="Criar imóvel" type="submit" />

            <ParticularsPicker
              onClose={() => setShowPicker(null)}
              open={showPicker === 'particularsPicker'}
              values={values}
              setFieldValue={setFieldValue}
            />

            <RatesPicker
              onClose={() => setShowPicker(null)}
              open={showPicker === 'ratesPicker'}
              values={values}
              setFieldValue={setFieldValue}
            />
          </Form>
        )}
      />
    </Container>
  );
}
