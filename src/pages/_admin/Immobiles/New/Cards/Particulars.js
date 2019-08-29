import React from 'react';
import { useSelector } from 'react-redux';
import { Scope } from '@rocketseat/unform';

import Input from '~/components/Input';
import Select from '~/components/Select';
import Radio from '~/components/Radio';

import { optionsParticulars } from '~/services/fakeData';

export default function Address() {
  const types = useSelector(state => state.core.types);

  return (
    <Scope path="particulars">
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

    <button type="button" >
      Todas características
    </button>

  </Scope>
  );
}
