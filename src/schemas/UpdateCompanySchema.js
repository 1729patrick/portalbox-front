import * as Yup from 'yup';

const requiredMessage = 'Este campo precisa ser preenchido';

const numberNullable = () =>
  Yup.number()
    .transform(cv => (cv >= 0 && typeof cv === 'number' ? cv : null))
    .nullable();

Yup.addMethod(Yup.array, 'unique', function(message, mapper = a => a) {
  return this.test('unique', message, function(list) {
    return list.length === new Set(list.map(mapper)).size;
  });
});

const UpdateCompanySchema = Yup.object().shape({
  name: Yup.string().required(requiredMessage),
  creci: Yup.string().required(requiredMessage),
  officeHours: Yup.string().required(requiredMessage),
  description: Yup.string().required(requiredMessage),
  address: Yup.object().shape({
    street: Yup.string().required(requiredMessage),
    number: numberNullable(),
    cep: Yup.string().required(requiredMessage),
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
  logo: Yup.object().shape({
    url: Yup.string().required(requiredMessage),
  }),
  banner: Yup.object().shape({
    url: Yup.string().required(requiredMessage),
  }),
  phones: Yup.array(
    Yup.object().shape({
      type: Yup.string().required(requiredMessage),
      number: Yup.number()
        .required(requiredMessage)
        .typeError(requiredMessage),
      description: Yup.string().required(requiredMessage),
    })
  ).unique('Telefones duplicados', phone => phone.number),
  emails: Yup.array(
    Yup.object().shape({
      email: Yup.string()
        .email('E-mail inválido')
        .required(requiredMessage),
      type: Yup.string().required(requiredMessage),
      showInPortal: Yup.bool().required(requiredMessage),
    })
  ).unique('E-mails duplicados', email => email.email),
  password: Yup.string().required(requiredMessage),
});

export default UpdateCompanySchema;
