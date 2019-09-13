import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';

import Select from '~/components/Select';
import Toggle from '~/components/Toggle';

import { Container, SubmitButton } from './styles';

import { searchImmobilesRequest } from '~/store/modules/filter/actions';

function Filter() {
  const dispatch = useDispatch();

  const description = useSelector(state => state.company.description);
  const cities = useSelector(state => state.core.cities);
  const types = useSelector(state => state.core.types);

  const handleSubmit = ({ finality, type, neighborhood }) => {
    const search = {
      finality,
      types: type ? [type] : [],
      neighborhoods: neighborhood ? [neighborhood] : [],
    };

    dispatch(searchImmobilesRequest(search));
  };

  return (
    <Container>
      <h1>{description}</h1>
      <Formik
        initialValues={{
          finality: {},
          type: null,
          neighborhood: null,
        }}
        onSubmit={handleSubmit}
        render={({ values, setFieldValue }) => (
          <Form>
            <Toggle
              label="O que você precisa?"
              options={[
                { value: 'rent', title: 'Alugar' },
                { value: 'sale', title: 'Comprar' },
              ]}
              selected={values.finality}
              setSelected={value => setFieldValue('finality', value)}
            />

            <Select
              placeholder="Qualquer tipo"
              options={types}
              name="type"
              label="Qual tipo?"
              multiple={false}
              isSearchable={false}
              selected={values.type}
              setSelected={value => setFieldValue('type', value)}
            />

            <Select
              placeholder="Em qualquer lugar"
              options={cities}
              name="neighborhood"
              label="Onde?"
              multiple={false}
              isSearchable={false}
              groupedData
              selected={values.neighborhood}
              setSelected={value => setFieldValue('neighborhood', value)}
              keys={{
                label: 'name',
                options: 'neighborhoods',
                option: 'name',
                value: '_id',
              }}
            />

            <SubmitButton type="submit" text="Procurar" />
          </Form>
        )}
      />
    </Container>
  );
}

export default Filter;
