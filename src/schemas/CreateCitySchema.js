import Yup, { requiredMessage } from '~/lib/yup';

const CreateCitySchema = Yup.object().shape({
  name: Yup.string().required(requiredMessage),
  neighborhoods: Yup.array(
    Yup.object().shape({
      name: Yup.string().required(requiredMessage),
    })
  ).unique('Bairros duplicados', neighborhood => neighborhood.name),
});

export default CreateCitySchema;
