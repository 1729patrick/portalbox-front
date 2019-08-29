import React from 'react';
import { Scope } from '@rocketseat/unform';

import Input from '~/components/Input';

export default function Cards() {
  return (
    <Scope path="owner">
      <div>
        <h1>
          Proprietário <p>(Opcional)</p>
        </h1>
      </div>

      <Input
        type="text"
        name="name"
        label="Nome"
        placeholder="Digite o nome do proprietário"
      />
      <Input
        type="text"
        name="whatsapp"
        label="Whatsapp"
        placeholder="Digite o número de Whatsapp"
      />
      <Input
        type="text"
        name="cpf"
        label="CPF"
        placeholder="Digite o número do CPF"
      />

      <Input
        type="text"
        name="annotations"
        label="Anotações"
        multiline
        placeholder="Digite algo sobre o responsável"
      />
    </Scope>
  );
}
