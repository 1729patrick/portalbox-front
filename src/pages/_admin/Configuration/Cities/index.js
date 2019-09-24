import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { useSelector } from 'react-redux';

import { Container } from './styles';

import NewPicker from './Pickers/New';
import List from './Cards/List';

export default function Cities() {
  const cities = useSelector(state => state.core.cities);
  const [pickerOpen, setPickerOpen] = useState('');
  const [initialValues, setInitialValues] = useState({});

  const handleClosePicker = () => {
    setPickerOpen('');
    setInitialValues({});
  };

  const handleEditCityClick = city => {
    setInitialValues(city);
    setPickerOpen('edit');
  };

  return (
    <Container>
      <List
        cities={cities}
        handleNewCityClick={() => setPickerOpen('new')}
        handleEditCityClick={handleEditCityClick}
      />

      <Formik
        onSubmit={data => console.log(data)}
        initialValues={initialValues}
        render={({ values, setFieldValue, errors }) => (
          <Form>
            {console.log(values)}
            <NewPicker
              values={values}
              setFieldValue={setFieldValue}
              errors={errors}
              open={!!pickerOpen}
              onClose={handleClosePicker}
            />
          </Form>
        )}
      />
    </Container>
  );
}
