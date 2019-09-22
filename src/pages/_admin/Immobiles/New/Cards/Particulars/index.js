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
}) {
  const types = useSelector(state => state.core.types);

  const path = useMemo(() => values.particulars, [values.particulars]);

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
      />

      <Radio
        label="Quartos"
        options={optionsParticulars}
        optional
        checked={path.bedroom}
        setChecked={value => setFieldValue('particulars.bedroom', value)}
      />

      <Radio
        label="Banheiros"
        options={optionsParticulars}
        optional
        checked={path.bathroom}
        setChecked={value => setFieldValue('particulars.bathroom', value)}
      />

      <Radio
        label="Garagens"
        optional
        options={optionsParticulars}
        checked={path.garage}
        setChecked={value => setFieldValue('particulars.garage', value)}
      />

      <Input
        type="number"
        label="Área total"
        placeholder="Digite o tamanho do terreno"
        optional
        value={path.totalArea}
        setValue={value => setFieldValue('particulars.totalArea', value)}
      />

      <button type="button" onClick={onOpenPicker}>
        Todas características
      </button>
    </Card>
  );
}
