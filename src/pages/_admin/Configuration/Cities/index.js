import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

import UpdateCitySchema from '~/schemas/UpdateCitySchema';
import CreateCitySchema from '~/schemas/CreateCitySchema';

import {
  createCityRequest,
  updateCityRequest,
} from '~/store/modules/core/actions';

import { Container } from './styles';

import NewPicker from './Pickers/New';
import List from './Cards/List';

const initialValues = { name: '', neighborhoods: [] };

export default function Cities() {
  const dispatch = useDispatch();
  const cities = useSelector(state => state.core.cities);
  const [pickerOpen, setPickerOpen] = useState('');
  const [valuesForm, setValuesForm] = useState(undefined);

  const handleClosePicker = ({ setValues }) => {
    setValues(initialValues);
    setPickerOpen('');
    setValuesForm(undefined);
  };

  const handleConfirmPicker = ({ values, cityDuplicated, closePicker }) => {
    const normalize = string =>
      string
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();

    const checkCities = cities.filter(
      ({ name }) => normalize(name) === normalize(values.name)
    );
    const checkCityChanged = valuesForm && valuesForm.name === values.name;

    if (checkCities.length && !checkCityChanged) {
      return cityDuplicated();
    }

    closePicker();

    if (pickerOpen === 'new') {
      return dispatch(createCityRequest(values));
    }

    if (pickerOpen === 'edit') {
      return dispatch(updateCityRequest(values));
    }
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
        initialValues={initialValues}
        validationSchema={getSchema()}
        render={({
          values,
          setFieldValue,
          errors,
          setValues,
          setTouched,
          setErrors,
          isValid,
          touched,
          setFieldError,
          setFieldTouched,
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
              setFieldTouched={setFieldTouched}
              setTouched={setTouched}
              setErrors={setErrors}
            />
          </Form>
        )}
      />
    </Container>
  );
}
