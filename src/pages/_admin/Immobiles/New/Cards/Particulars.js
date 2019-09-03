import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Scope } from '@rocketseat/unform';

import Input from '~/components/Input';
import Select from '~/components/Select';
import Radio from '~/components/Radio';

import { optionsParticulars } from '~/services/fakeData';

export default function Address({onOpenPicker, onClosePicker, openPicker}) {
  const types = useSelector(state => state.core.types);

  return (
    <Fragment>
        <div>
          <h1>Características</h1>
        </div>

        <Select
          placeholder="Selecione o tipo"
          options={types}
          name="type"
          label="Tipo"
          multiple={false}
        />

      <Scope path="particulars">
        <Radio
          name="bedroom"
          label="Quartos"
          options={optionsParticulars}
          optional
        />

        <Radio
          name="bathroom"
          label="Banheiros"
          options={optionsParticulars}
          optional
        />

        <Radio
          name="garage"
          label="Garagens"
          optional
          options={optionsParticulars}
        />

        <Input
          type="number"
          name="area"
          label="Área"
          placeholder="Digite o tamanho do imóvel"
          optional
        />

        <button type="button" onClick={onOpenPicker}>
          Todas características
        </button>
      </Scope>

  </Fragment>
  );
}
