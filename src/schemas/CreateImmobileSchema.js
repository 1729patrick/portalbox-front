import Yup, { requiredMessage, numberNullable } from '~/lib/yup';

const CreateImmobileSchema = Yup.object().shape({
  // address
  address: Yup.object().shape({
    street: Yup.string().required(requiredMessage),
    number: numberNullable(),
    city: Yup.object()
      .shape({
        _id: Yup.string().required(requiredMessage),
      })
      .typeError(requiredMessage)
      .required(requiredMessage),
    neighborhood: Yup.object()
      .shape({
        _id: Yup.string().required(requiredMessage),
      })
      .typeError(requiredMessage)
      .required(requiredMessage),
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
