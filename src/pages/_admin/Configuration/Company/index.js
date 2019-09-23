/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Formik, Form } from 'formik';
import { useSelector } from 'react-redux';

import { SubmitButton } from './styles';

import MyCompany from './Cards/MyCompany';
import Address from './Cards/Address';
import Images from './Cards/Images';
import Phones from './Cards/Phones';
import Mails from './Cards/Mails';

import UpdateCompanySchema from '~/schemas/UpdateCompanySchema';

export default function Company() {
  const company = useSelector(state => {
    const { _id, ...company } = state.company;
    return company;
  });

  return (
    <Formik
      validateOnChange={false}
      initialValues={company}
      onSubmit={data => console.log(data, JSON.stringify(data))}
      validationSchema={UpdateCompanySchema}
      render={({ values, setFieldValue, errors }) => (
        <Form>
          {console.log(errors)}
          <MyCompany
            values={values}
            setFieldValue={setFieldValue}
            errors={errors}
          />
          <Address
            values={values}
            setFieldValue={setFieldValue}
            errors={errors}
          />
          <Images
            values={values}
            setFieldValue={setFieldValue}
            errors={errors}
          />
          <Phones
            values={values}
            setFieldValue={setFieldValue}
            errors={errors}
          />
          <Mails
            values={values}
            setFieldValue={setFieldValue}
            errors={errors}
          />

          <SubmitButton text="Salvar" type="submit" />
        </Form>
      )}
    />
  );
}
