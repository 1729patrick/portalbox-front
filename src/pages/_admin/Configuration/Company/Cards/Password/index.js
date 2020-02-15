import React from 'react';
import PropTypes from 'prop-types';

import Card from '~/components/_admin/Card';
import Input from '~/components/Input';

const Password = ({
  values,
  setFieldValue,
  errors,
  setFieldTouched,
  touched,
  formSubmitted,
}) => {
  return (
    <Card>
      <div>
        <h1>Confirme a Senha</h1>
      </div>

      <Input
        type="password"
        label="Senha"
        placeholder="Digite a senha da empresa"
        error={errors.password}
        value={values.password}
        setValue={value => setFieldValue('password', value)}
        setTouched={() => setFieldTouched('password')}
        touched={touched.password}
        formSubmitted={formSubmitted}
      />
    </Card>
  );
};

Password.propTypes = {
  values: PropTypes.shape({
    password: PropTypes.string,
  }).isRequired,
  setFieldValue: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    password: PropTypes.string,
  }).isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  touched: PropTypes.shape({
    password: PropTypes.bool,
  }).isRequired,
  formSubmitted: PropTypes.bool.isRequired,
};

export default Password;
