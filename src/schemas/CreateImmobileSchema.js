import * as Yup from 'yup';

const requiredMessage = 'Este campo precisa ser preenchido';

Yup.numberNullable = () =>
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
    number: Yup.numberNullable(),
    city: Yup.string().required(requiredMessage),
    neighborhood: Yup.string().required(requiredMessage),
  }),
  particulars: Yup.mixed(),
  type: Yup.string().required(requiredMessage),
  map: Yup.object().shape({
    lat: Yup.numberNullable(),
    lng: Yup.numberNullable(),
  }),
  price: Yup.object()
    .shape({
      sale: Yup.numberNullable(),
      rent: Yup.numberNullable(),
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
    whatsapp: Yup.numberNullable(),
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
    iptu: Yup.numberNullable(),
    condominium: Yup.numberNullable(),
    fireInsurance: Yup.numberNullable(),
  }),
});

export default CreateImmobileSchema;
