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

export default function New() {
  const dispatch = useDispatch();

  const [showPicker, setShowPicker] = useState(null);

  return (
    <Container>
      <Formik
        validateOnChange={false}
        initialValues={initialData}
        onSubmit={data => console.log(data, JSON.stringify(data))}
        validationSchema={CreateImmobileSchema}
        render={({ values, setFieldValue, errors }) => (
          <Form>
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
