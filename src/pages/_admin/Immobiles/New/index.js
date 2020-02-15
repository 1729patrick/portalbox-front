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
  address: {
    city: '',
    neighborhood: '',
    street: '',
    number: '',
  },
  particulars: { bedroom: 0, bathroom: 0, garage: 0, totalArea: '' },
  map: { lat: '', lng: '' },
  price: { sale: '', rent: '' },
  owner: {
    name: '',
    whatsapp: '',
    cpf: '',
    annotation: '',
  },
  config: {
    sessions: [],
  },
  allParticulars: { buildingArea: '' },
  rates: { condominium: '', iptu: '', fireInsurance: '' },
  images: [],
  type: '',
};

// const initialData = {
//   address: {
//     city: {
//       neighborhoods: [
//         { _id: '5ddfd13609817c0d7393a94c', name: 'Centro' },
//         { _id: '5ddfd13609817c0d7393a94d', name: 'Alfama' },
//         { _id: '5ddfd13609817c0d7393a94e', name: 'Caxias' },
//         { _id: '5ddfd13609817c0d7393a94f', name: 'Amadora' },
//         { _id: '5ddfd13609817c0d7393a950', name: 'Loures' },
//       ],
//       _id: '5ddfd13609817c0d7393a94b',
//       name: 'Lisboa',
//     },
//     neighborhood: { _id: '5ddfd13609817c0d7393a94c', name: 'Centro' },
//     street: 'asjdjsajdanj',
//     number: '21321',
//   },
//   particulars: { bedroom: 4, bathroom: 5, garage: 5, totalArea: '21321' },
//   map: { lat: '21321', lng: '12321' },
//   price: { sale: '888', rent: '78' },
//   owner: {
//     name: 'mkasdmsk',
//     whatsapp: '23432',
//     cpf: '2324',
//     annotation: '23432f3',
//   },
//   config: {
//     sessions: [
//       { name: 'Novos', _id: 1, key: 'news' },
//       { name: 'Destaques de venda', _id: 2, key: 'saleHighlights' },
//       { name: 'Destaques de locação', _id: 3, key: 'rentalHighlights' },
//     ],
//   },
//   allParticulars: {
//     buildingArea: '165',
//     academy: true,
//     gourmetSpace: true,
//     pool: true,
//     gamesRoom: true,
//     airConditioning: 3,
//     laundry: true,
//     furnished: true,
//   },
//   rates: { condominium: '', iptu: '3423', fireInsurance: '12315' },
//   images: [],
//   type: {
//     _id: '5ddfd20309817c0d7393a95c',
//     name: 'Cobertura',
//     image:
//       'http://localhost:3333/static/files/3a67a22b0316e073237add3c0e43d1d2.jpg',
//   },
// };
export default function New() {
  const dispatch = useDispatch();

  const [showPicker, setShowPicker] = useState(null);

  return (
    <Container>
      <Formik
        initialValues={initialData}
        onSubmit={data => dispatch(createImmobilesRequest(data))}
        validationSchema={CreateImmobileSchema}
        render={({
          values,
          setFieldValue,
          errors,
          setFieldTouched,
          touched,
          isValid,
          submitCount,
        }) => (
          <Form>
            <Address
              values={values}
              setFieldValue={setFieldValue}
              errors={errors}
              setFieldTouched={setFieldTouched}
              touched={touched}
              formSubmitted={submitCount > 0}
            />

            <Particulars
              onOpenPicker={() => setShowPicker('particularsPicker')}
              values={values}
              setFieldValue={setFieldValue}
              errors={errors}
              setFieldTouched={setFieldTouched}
              touched={touched}
              formSubmitted={submitCount > 0}
            />

            <Map values={values} setFieldValue={setFieldValue} />

            <Price
              onOpenPicker={() => setShowPicker('ratesPicker')}
              onClosePicker={() => setShowPicker(null)}
              openPicker={showPicker === 'ratesPicker'}
              values={values}
              setFieldValue={setFieldValue}
              errors={errors}
              setFieldTouched={setFieldTouched}
              touched={touched}
              formSubmitted={submitCount > 0}
            />

            <Images
              values={values}
              setFieldValue={setFieldValue}
              errors={errors}
            />

            <Owner values={values} setFieldValue={setFieldValue} />

            <Config values={values} setFieldValue={setFieldValue} />

            <SubmitButton
              text="Criar imóvel"
              type="submit"
              disabled={!isValid}
            />

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
