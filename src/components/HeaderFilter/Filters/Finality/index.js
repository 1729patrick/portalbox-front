import React from 'react';

import Toggle from '~/components/Toggle';

import PopupLayout from '../../_layouts/Popup';

export default function Finality() {
  return (
    <PopupLayout label="O que você precisa?">
      <Toggle
        name="finality"
        options={[{ value: 1, name: 'Alugar' }, { value: 2, name: 'Comprar' }]}
        value={1}
      />
    </PopupLayout>
  );
}
