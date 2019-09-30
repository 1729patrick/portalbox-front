import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { useSelector } from 'react-redux';

import { Container } from './styles';

import NewPicker from './Pickers/New';
import List from './Cards/List';

export default function Cities() {
  const cities = useSelector(state => state.core.cities);
  const [pickerOpen, setPickerOpen] = useState('');
  const [valuesForm, setValuesForm] = useState(undefined);

  const handleClosePicker = () => {
    setPickerOpen('');
    setValuesForm(undefined);
  };

  const handleEditCityClick = city => {
    setValuesForm(city);
    setPickerOpen('edit');
  };

  const handleNewCityClick = () => {
    setValuesForm(undefined);
    setPickerOpen('new');
  };
  return (
    <Container>
      <List
        cities={cities}
        handleNewCityClick={handleNewCityClick}
        handleEditCityClick={handleEditCityClick}
      />

      <Formik
        onSubmit={data => console.log(data)}
        initialValues={{ name: '', neighborhoods: [] }}
        render={({ values, setFieldValue, errors, setValues }) => (
          <Form>
            <NewPicker
              values={values}
              setFieldValue={setFieldValue}
              errors={errors}
              open={!!pickerOpen}
              onClose={handleClosePicker}
              valuesForm={valuesForm}
              setValues={setValues}
              pickerType={pickerOpen}
            />
          </Form>
        )}
      />
    </Container>
  );
}
