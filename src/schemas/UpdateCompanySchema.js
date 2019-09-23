import * as Yup from 'yup';

const requiredMessage = 'Este campo precisa ser preenchido';

Yup.numberNullable = () =>
  Yup.number()
    .transform(cv => {
      return typeof cv === 'number' && !isNaN(cv) ? cv : null;
    })
    .nullable();

const UpdateCompanySchema = Yup.object().shape({
  name: Yup.string().required(requiredMessage),
  creci: Yup.string().required(requiredMessage),
  officeHours: Yup.string().required(requiredMessage),
  description: Yup.string().required(requiredMessage),
  address: Yup.object().shape({
    street: Yup.string().required(requiredMessage),
    number: Yup.numberNullable(),
    cep: Yup.string().required(requiredMessage),
    city: Yup.object()
      .shape({
        _id: Yup.number().required(),
        name: Yup.string(),
      })
      .typeError(requiredMessage)
      .required(requiredMessage),

    neighborhood: Yup.object()
      .shape({
        _id: Yup.number().required(),
        name: Yup.string(),
      })
      .typeError(requiredMessage)
      .required(requiredMessage),
  }),
  logo: Yup.mixed().required(requiredMessage),
  banner: Yup.mixed().required(requiredMessage),
  phones: Yup.array(
    Yup.object().shape({
      type: Yup.string().required(requiredMessage),
      number: Yup.number()
        .typeError(requiredMessage)
        .required(requiredMessage),
      description: Yup.string().required(requiredMessage),
    })
  ),
  emails: Yup.array(
    Yup.object().shape({
      email: Yup.string().required(requiredMessage),
      type: Yup.string().required(requiredMessage),
      showInPortal: Yup.bool().required(requiredMessage),
    })
  ),
});

export default UpdateCompanySchema;
