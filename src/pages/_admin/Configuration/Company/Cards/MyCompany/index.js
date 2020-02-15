import React from 'react';
import PropTypes from 'prop-types';

import Card from '~/components/_admin/Card';
import Input from '~/components/Input';

const MyCompany = ({
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
        <h1>Dados</h1>
      </div>
      <Input
        type="text"
        label="Nome"
        placeholder="Digite o nome da empresa"
        error={errors.name}
        value={values.name}
        setValue={value => setFieldValue('name', value)}
        setTouched={() => setFieldTouched('name')}
        touched={touched.name}
        formSubmitted={formSubmitted}
      />
      <Input
        type="text"
        label="Creci"
        placeholder="Digite o creci da empresa"
        error={errors.creci}
        value={values.creci}
        setValue={value => setFieldValue('creci', value)}
        setTouched={() => setFieldTouched('creci')}
        touched={touched.creci}
        formSubmitted={formSubmitted}
      />
      <Input
        type="text"
        label="Horário de atendimento"
        placeholder="Digite o horário de atendimento"
        error={errors.officeHours}
        value={values.officeHours}
        setValue={value => setFieldValue('officeHours', value)}
        setTouched={() => setFieldTouched('officeHours')}
        touched={touched.officeHours}
        formSubmitted={formSubmitted}
      />
      <Input
        type="text"
        label="Descrição"
        placeholder="Digite a descrição da empresa"
        error={errors.description}
        value={values.description}
        setValue={value => setFieldValue('description', value)}
        setTouched={() => setFieldTouched('description')}
        touched={touched.description}
        formSubmitted={formSubmitted}
      />
    </Card>
  );
};

MyCompany.propTypes = {
  values: PropTypes.shape({
    name: PropTypes.string.isRequired,
    creci: PropTypes.string.isRequired,
    officeHours: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  setFieldValue: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
    creci: PropTypes.string,
    officeHours: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  touched: PropTypes.shape({
    name: PropTypes.bool,
    creci: PropTypes.bool,
    officeHours: PropTypes.bool,
    description: PropTypes.bool,
  }).isRequired,
  formSubmitted: PropTypes.bool.isRequired,
};

export default MyCompany;
