import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import Card from '~/components/_admin/Card';
import Input from '~/components/Input';
import Select from '~/components/Select';
import Radio from '~/components/Radio';

import { optionsParticulars } from '~/services/fakeData';

export default function Particulars({
  onOpenPicker,
  values,
  setFieldValue,
  errors,
  setFieldTouched,
  touched,
  formSubmitted,
}) {
  const types = useSelector(state => state.core.types);

  const pathValues = useMemo(() => values.particulars, [values.particulars]);

  const getTouched = field => {
    return touched.particulars ? touched.particulars[field] : null;
  };

  return (
    <Card>
      <div>
        <h1>Características</h1>
      </div>

      <Select
        placeholder="Selecione o tipo"
        options={types}
        label="Tipo"
        multiple={false}
        selected={values.type}
        setSelected={value => setFieldValue('type', value)}
        error={errors.type}
        setTouched={() => setFieldTouched('type')}
        touched={touched.type}
        formSubmitted={formSubmitted}
      />

      <Radio
        label="Quartos"
        options={optionsParticulars}
        optional
        checked={pathValues.bedroom}
        setChecked={value => setFieldValue('particulars.bedroom', value)}
        setTouched={() => setFieldTouched('particulars.bedroom')}
        touched={getTouched('bedroom')}
        formSubmitted={formSubmitted}
      />

      <Radio
        label="Banheiros"
        options={optionsParticulars}
        optional
        checked={pathValues.bathroom}
        setChecked={value => setFieldValue('particulars.bathroom', value)}
        setTouched={() => setFieldTouched('particulars.bathroom')}
        touched={getTouched('bathroom')}
        formSubmitted={formSubmitted}
      />

      <Radio
        label="Garagens"
        optional
        options={optionsParticulars}
        checked={pathValues.garage}
        setChecked={value => setFieldValue('particulars.garage', value)}
        setTouched={() => setFieldTouched('particulars.garage')}
        touched={getTouched('garage')}
        formSubmitted={formSubmitted}
      />

      <Input
        type="number"
        label="Área total"
        placeholder="Digite o tamanho do terreno"
        optional
        value={pathValues.totalArea}
        setValue={value => setFieldValue('particulars.totalArea', value)}
        setTouched={() => setFieldTouched('particulars.totalArea')}
        touched={getTouched('totalArea')}
        formSubmitted={formSubmitted}
      />

      <button type="button" onClick={onOpenPicker}>
        Todas características
      </button>
    </Card>
  );
}
