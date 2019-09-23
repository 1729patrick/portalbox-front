import React from 'react';

import Card from '~/components/_admin/Card';
import Input from '~/components/Input';

export default function Images({ values, setFieldValue, errors }) {
  return (
    <Card>
      <div>
        <h1>Fotos</h1>
      </div>

      <Input
        type="text"
        label="Logo"
        placeholder="Selecione o logo da empresa"
        error={errors.logo}
        // value={path.street}
        // setValue={value => setFieldValue('address.street', value)}
      />
      <Input
        type="text"
        label="Banner"
        placeholder="Selecione o banner da empresa"
        error={errors.banner}
        // value={path.street}
        // setValue={value => setFieldValue('address.street', value)}
      />
    </Card>
  );
}
