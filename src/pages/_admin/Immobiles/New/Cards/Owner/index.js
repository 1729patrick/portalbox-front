import React, { useMemo } from 'react';

import Input from '~/components/Input';
import Card from '~/components/_admin/Card';

export default function Owner({ values, setFieldValue }) {
  const path = useMemo(() => values.owner, [values.owner]);

  return (
    <Card>
      <div>
        <h1>
          Proprietário <p>(Opcional)</p>
        </h1>
      </div>
      <Input
        type="text"
        label="Nome"
        placeholder="Digite o nome do proprietário"
        value={path.name}
        setValue={value => setFieldValue('owner.name', value)}
      />

      <Input
        type="text"
        label="Whatsapp"
        placeholder="Digite o número de Whatsapp"
        value={path.whatsapp}
        setValue={value => setFieldValue('owner.whatsapp', value)}
      />

      <Input
        type="text"
        label="CPF"
        placeholder="Digite o número do CPF"
        value={path.cpf}
        setValue={value => setFieldValue('owner.cpf', value)}
      />

      <Input
        type="text"
        label="Anotações"
        multiline
        placeholder="Digite algo sobre o responsável"
        value={path.annotations}
        setValue={value => setFieldValue('owner.annotations', value)}
      />
    </Card>
  );
}
