import React from 'react';

import Toggle from '~/components/Toggle';

import DefaultPopupLayout from '../_layouts/DefaultPopup';

export default function Finality() {
  return (
    <DefaultPopupLayout label="O que você precisa?">
      <Toggle
        name="finality"
        options={[{ value: 1, name: 'Alugar' }, { value: 2, name: 'Comprar' }]}
        value={1}
      />
    </DefaultPopupLayout>
  );
}
