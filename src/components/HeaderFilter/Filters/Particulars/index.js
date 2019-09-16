import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import IncreaseDecrease from '~/components/IncreaseDecrease';
import Switch from '~/components/Switch';

import { Content } from './styles';
import PopupLayout from '../../_layouts/Popup';

import { optionsParticular } from '~/services/fakeData';

import { setParticularsFilter } from '~/store/modules/filter/actions';

export default function Particulars({ onClick }) {
  const dispatch = useDispatch();

  const initialValues = useMemo(() => {
    return {
      bathroom: 1,
      bedroom: 1,
      garage: 1,
    };
  }, []);
  const handleChange = values => {
    dispatch(setParticularsFilter({ particulars: values }));
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
  };

  return (
    <PopupLayout label="Com quais características?" onClick={onClick}>
      <Content>
        <Formik
          initialValues={initialValues}
          validate={handleChange}
          render={({ values, setFieldValue }) => (
            <Form>
              {optionsParticular.map(({ name, ...particular }) =>
                renderParticular(particular, values[name], value =>
                  setFieldValue(name, value)
                )
              )}
            </Form>
          )}
        />
      </Content>
    </PopupLayout>
  );
}
