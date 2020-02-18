import Yup, { requiredMessage } from '~/lib/yup';

const UpdateCitySchema = Yup.object().shape({
  name: Yup.string().required(requiredMessage),
  _id: Yup.string().required(requiredMessage),
  neighborhoods: Yup.array(
    Yup.object().shape({
      name: Yup.string().required(requiredMessage),
      _id: Yup.string(),
    })
  ).unique('Bairros duplicados', neighborhood => neighborhood.name),
});

export default UpdateCitySchema;
