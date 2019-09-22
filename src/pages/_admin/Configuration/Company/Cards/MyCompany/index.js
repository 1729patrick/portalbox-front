import React from 'react';

import Card from '~/components/_admin/Card';
import Input from '~/components/Input';

export default function MyCompany() {
  return (
    <Card>
      <div>
        <h1>Empresa</h1>
      </div>

      <Input
        type="text"
        label="Nome"
        placeholder="Digite o nome da empresa"
        // error={'errors'}
        // value={path.street}
        // setValue={value => setFieldValue('address.street', value)}
      />
      <Input
        type="text"
        label="Creci"
        placeholder="Digite o creci da empresa"
        // error={'errors'}
        // value={path.street}
        // setValue={value => setFieldValue('address.street', value)}
      />
      <Input
        type="text"
        label="Horário de atendimento"
        placeholder="Digite o horário de atendimento"
        // error={'errors'}
        // value={path.street}
        // setValue={value => setFieldValue('address.street', value)}
      />
      <Input
        type="text"
        label="Logo"
        placeholder="Selecione o logo da empresa"
        // error={'errors'}
        // value={path.street}
        // setValue={value => setFieldValue('address.street', value)}
      />
      <Input
        type="text"
        label="Banner"
        placeholder="Selecione o banner da empresa"
        // error={'errors'}
        // value={path.street}
        // setValue={value => setFieldValue('address.street', value)}
      />
    </Card>
  );
}
