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
import Password from './Cards/Password';

import UpdateCompanySchema from '~/schemas/UpdateCompanySchema';

export default function Company() {
  const company = useSelector(state => {
    const { _id, ...company } = state.company;
    return { ...company, password: '' };
  });

  return (
    <Formik
      validateOnChange={false}
      initialValues={company}
      validationSchema={UpdateCompanySchema}
      onSubmit={values => console.log(JSON.stringify(values))}
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
          <Password
            values={values}
            setFieldValue={setFieldValue}
            errors={errors}
          />

          <SubmitButton text="Salvar" type="submit" disabled={!isValid} />
        </Form>
      )}
    />
  );
}
