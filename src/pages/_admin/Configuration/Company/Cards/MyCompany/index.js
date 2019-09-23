import React from 'react';

import Card from '~/components/_admin/Card';
import Input from '~/components/Input';

export default function MyCompany({ values, setFieldValue, errors }) {
  return (
    <Card>
      <div>
        <h1>Dados</h1>
      </div>

      <Input
        type="text"
        label="Nome"
        placeholder="Digite o nome da empresa"
        error={errors.name}
        value={values.name}
        setValue={value => setFieldValue('name', value)}
      />
      <Input
        type="text"
        label="Creci"
        placeholder="Digite o creci da empresa"
        error={errors.creci}
        value={values.creci}
        setValue={value => setFieldValue('creci', value)}
      />
      <Input
        type="text"
        label="Horário de atendimento"
        placeholder="Digite o horário de atendimento"
        error={errors.officeHours}
        value={values.officeHours}
        setValue={value => setFieldValue('officeHours', value)}
      />
      <Input
        type="text"
        label="Descrição"
        placeholder="Digite a descrição da empresa"
        error={errors.description}
        value={values.description}
        setValue={value => setFieldValue('description', value)}
      />
    </Card>
  );
}
