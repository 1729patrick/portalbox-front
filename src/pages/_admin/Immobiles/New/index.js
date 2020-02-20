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

export default function New() {
  const dispatch = useDispatch();

  const [showPicker, setShowPicker] = useState(null);

  return (
    <Container>
      <Formik
        validateOnChange
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
