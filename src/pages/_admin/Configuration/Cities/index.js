import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

import UpdateCitySchema from '~/schemas/UpdateCitySchema';
import CreateCitySchema from '~/schemas/CreateCitySchema';

import { Container } from './styles';

import NewPicker from './Pickers/New';
import List from './Cards/List';

export default function Cities() {
  const dispatch = useDispatch();
  const cities = useSelector(state => state.core.cities);
  const [pickerOpen, setPickerOpen] = useState('');
  const [valuesForm, setValuesForm] = useState(undefined);

  const handleClosePicker = () => {
    setPickerOpen('');
    setValuesForm(undefined);
  };

  const handleConfirmPicker = ({ values, setFieldError }) => {
    const checkCities = cities.filter(({ name }) => name === values.name);

    if (checkCities.length) {
      setFieldError('name', 'Cidade duplicada');
    }
    console.log(values);
  };

  const handleEditCityClick = city => {
    setValuesForm(city);
    setPickerOpen('edit');
  };

  const handleNewCityClick = () => {
    setValuesForm(undefined);
    setPickerOpen('new');
  };
  const getSchema = () => {
    return pickerOpen === 'new' ? CreateCitySchema : UpdateCitySchema;
  };

  return (
    <Container>
      <List
        cities={cities}
        handleNewCityClick={handleNewCityClick}
        handleEditCityClick={handleEditCityClick}
      />

      <Formik
        initialValues={{ name: '', neighborhoods: [] }}
        validationSchema={getSchema()}
        render={({
          values,
          setFieldValue,
          errors,
          setValues,
          isValid,
          touched,
          setFieldError,
        }) => (
          <Form>
            <NewPicker
              values={values}
              setFieldValue={setFieldValue}
              errors={errors}
              open={!!pickerOpen}
              onClose={handleClosePicker}
              onConfirm={handleConfirmPicker}
              valuesForm={valuesForm}
              setValues={setValues}
              pickerType={pickerOpen}
              isValid={isValid}
              touched={touched}
              setFieldError={setFieldError}
            />
          </Form>
        )}
      />
    </Container>
  );
}
