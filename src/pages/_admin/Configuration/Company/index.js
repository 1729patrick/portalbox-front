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
          <MyCompany
            values={values}
            setFieldValue={setFieldValue}
            errors={errors}
            setFieldTouched={setFieldTouched}
            touched={touched}
            formSubmitted={submitCount > 0}
          />
          <Address
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
            setFieldTouched={setFieldTouched}
            touched={touched}
            formSubmitted={submitCount > 0}
          />
          <Phones
            values={values}
            setFieldValue={setFieldValue}
            errors={errors}
            setFieldTouched={setFieldTouched}
            touched={touched}
            formSubmitted={submitCount > 0}
          />
          <Mails
            values={values}
            setFieldValue={setFieldValue}
            errors={errors}
            setFieldTouched={setFieldTouched}
            touched={touched}
            formSubmitted={submitCount > 0}
          />
          <Password
            values={values}
            setFieldValue={setFieldValue}
            errors={errors}
            setFieldTouched={setFieldTouched}
            touched={touched}
            formSubmitted={submitCount > 0}
          />

          <SubmitButton text="Salvar" type="submit" disabled={!isValid} />
        </Form>
      )}
    />
  );
}
