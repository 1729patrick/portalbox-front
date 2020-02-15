import * as Yup from 'yup';

const requiredMessage = 'Este campo precisa ser preenchido';

const numberNullable = () =>
  Yup.number()
    .transform(cv => (cv >= 0 && typeof cv === 'number' ? cv : null))
    .nullable();

Yup.addMethod(Yup.object, 'atLeastOneOf', function(list) {
  return this.test({
    name: 'atLeastOneOf',
    message: 'Ao menos um campo precisa ser preenchido',
    exclusive: true,
    params: { keys: list.join(', ') },
    test: value => value === null || list.some(f => value[f] !== null),
  });
});

const CreateImmobileSchema = Yup.object().shape({
  // address
  address: Yup.object().shape({
    street: Yup.string().required(requiredMessage),
    number: numberNullable(),
    city: Yup.string().required(requiredMessage),
    neighborhood: Yup.string().required(requiredMessage),
  }),
  particulars: Yup.mixed(),
  type: Yup.string().required(requiredMessage),
  map: Yup.object().shape({
    lat: numberNullable(),
    lng: numberNullable(),
  }),
  price: Yup.object()
    .shape({
      sale: numberNullable(),
      rent: numberNullable(),
    })
    .atLeastOneOf(['sale', 'rent']),
  images: Yup.array(
    Yup.object().shape({
      image: Yup.mixed(),
      description: Yup.string(),
    })
  ).required(''),
  owner: Yup.object().shape({
    name: Yup.string(),
    whatsapp: numberNullable(),
    cpf: Yup.string(),
    annotation: Yup.string(),
  }),
  config: Yup.object().shape({
    sessions: Yup.array(
      Yup.object().shape({
        _id: Yup.number().required(),
        name: Yup.string(),
        key: Yup.string(),
      })
    ),
  }),
  rates: Yup.object().shape({
    iptu: numberNullable(),
    condominium: numberNullable(),
    fireInsurance: numberNullable(),
  }),
});

export default CreateImmobileSchema;
