/* eslint-disable no-shadow */
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import _ from 'lodash';

import Switch from '~/components/Switch';

import { Content, IncreaseDecrease } from './styles';
import PopupLayout from '../../_layouts/Popup';

import { optionsParticular } from '~/services/fakeData';

import { setParticularsFilter } from '~/store/modules/filter/actions';

export default function Particulars({ onClick }) {
  const dispatch = useDispatch();
  const { saved, value, valueDefault } = useSelector(
    state => state.filter.filters.particulars
  );

  const initialValues = useMemo(
    () => (Object.keys(saved).length ? saved : valueDefault),
    [valueDefault, saved]
  );

  const handleChange = values => {
    dispatch(setParticularsFilter({ particulars: values }));
  };

  const onClear = (resetForm, setFieldValue) => {
    handleChange(valueDefault);
    resetForm();

    Object.keys(valueDefault).forEach(particularName =>
      setFieldValue(particularName, valueDefault[particularName])
    );
  };

  const renderParticular = ({ type, _id, title }, value, setValue) => {
    if (type === 'range') {
      return (
        <IncreaseDecrease
          key={_id}
          title={title}
          value={value}
          setValue={setValue}
        />
      );
    }

    if (type === 'bool') {
      return (
        <Switch key={_id} title={title} value={value} setValue={setValue} />
      );
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={handleChange}
      render={({ values, setFieldValue, resetForm }) => (
        <PopupLayout
          label="Com quais características?"
          onClick={onClick}
          onClear={() => onClear(resetForm, setFieldValue)}
          showClear={!_.isEqual(value, valueDefault)}
        >
          <Content>
            <Form>
              {optionsParticular.map(({ name, ...particular }) =>
                renderParticular(particular, values[name], value =>
                  setFieldValue(name, value)
                )
              )}
            </Form>
          </Content>
        </PopupLayout>
      )}
    />
  );
}
