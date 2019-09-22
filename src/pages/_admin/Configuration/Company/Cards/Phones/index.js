import React from 'react';

import Card from '~/components/_admin/Card';
import Input from '~/components/Input';

export default function Phones() {
  return (
    <Card>
      <div>
        <h1>Telefones</h1>
      </div>

      <Input
        type="text"
        label="Número"
        placeholder="Digite o número do telefone"
        // error={'errors'}
        // value={path.street}
        // setValue={value => setFieldValue('address.street', value)}
      />
    </Card>
  );
}
