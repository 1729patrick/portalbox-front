import * as Yup from 'yup';

const requiredMessage = 'Este campo precisa ser preenchido';

const CreateImmobileSchema = Yup.object().shape({
  // address
  address: Yup.object().shape({
    street: Yup.string().required(requiredMessage),
    string: Yup.string(),
    city: Yup.string().required(requiredMessage),
    neighborhood: Yup.string().required(requiredMessage),
  }),
  particulars: Yup.object().shape({
    type: Yup.string().required(requiredMessage),
    bedroom: Yup.string().required(requiredMessage),
    bathroom: Yup.string().required(requiredMessage),
    garage: Yup.string(),
    area: Yup.string(),
  }),

  map: Yup.object().shape({
    lat: Yup.string(),
    lng: Yup.string(),
  }),

  price: Yup.object().shape({
    sale: Yup.string(),
    rent: Yup.string(),
  }),
  images: Yup.string(),
  owner: Yup.object().shape({
    name: Yup.string(),
    whatsapp: Yup.string(),
    cpf: Yup.string(),
    annotation: Yup.string(),
  }),
});

export default CreateImmobileSchema;
