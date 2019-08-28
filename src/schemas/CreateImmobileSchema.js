import * as Yup from 'yup';

const requiredMessage = 'Este campo precisa ser preenchido';
Yup.numberNullable = () =>
  Yup.number()
    .transform(cv => (!cv ? null : cv))
    .nullable();

const CreateImmobileSchema = Yup.object().shape({
  // address
  address: Yup.object().shape({
    street: Yup.string().required(requiredMessage),
    number: Yup.numberNullable(),
    city: Yup.string().required(requiredMessage),
    neighborhood: Yup.string().required(requiredMessage),
  }),
  particulars: Yup.object().shape({
    type: Yup.string().required(requiredMessage),
    bedroom: Yup.string(),
    bathroom: Yup.string(),
    garage: Yup.string(),
    area: Yup.string(),
  }),

  map: Yup.object().shape({
    lat: Yup.numberNullable(),
    lng: Yup.numberNullable(),
  }),

  price: Yup.object().shape({
    sale: Yup.numberNullable(),
    rent: Yup.numberNullable(),
  }),
  images: Yup.number().min(1, 'Adicione ao menos uma foto'),
  owner: Yup.object().shape({
    name: Yup.string(),
    whatsapp: Yup.string(),
    cpf: Yup.string(),
    annotation: Yup.string(),
  }),
  config: Yup.object().shape({
    sessions: Yup.array(Yup.number()),
  }),
});

export default CreateImmobileSchema;
