import React from 'react';

import Card from '~/components/_admin/Card';
import Input from '~/components/Input';

const Password = ({ errors, values, setFieldValue }) => {
  return (
    <Card>
      <div>
        <h1>Confirme sua Senha</h1>
      </div>

      <Input
        type="password"
        label="Senha"
        placeholder="Digite a senha da empresa"
        error={errors.password}
        value={values.password}
        setValue={value => setFieldValue('password', value)}
      />
    </Card>
  );
};

export default Password;
