import * as Yup from 'yup';

const requiredMessage = 'Este campo precisa ser preenchido';

const CreateImmobileSchema = Yup.object().shape({
  // address
  address: Yup.object().shape({
    street: Yup.string().required(requiredMessage),
    number: Yup.number()
      .transform(cv => (!cv ? null : cv))
      .nullable(),
    city: Yup.string().required(requiredMessage),
    neighborhood: Yup.string().required(requiredMessage),
  }),
  particulars: Yup.object().shape({
    type: Yup.string().required(requiredMessage),
    bedroom: Yup.string(),
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
  images: Yup.number().min(1, 'Adicione ao menos uma foto'),
  owner: Yup.object().shape({
    name: Yup.string(),
    whatsapp: Yup.string(),
    cpf: Yup.string(),
    annotation: Yup.string(),
  }),
});

export default CreateImmobileSchema;
