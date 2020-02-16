import * as Yup from 'yup';

const requiredMessage = 'Este campo precisa ser preenchido';

Yup.addMethod(Yup.array, 'unique', function(message, mapper = a => a) {
  return this.test('unique', message, function(list) {
    return list.length === new Set(list.map(mapper)).size;
  });
});

const CreateCitySchema = Yup.object().shape({
  name: Yup.string().required(requiredMessage),
  neighborhoods: Yup.array(
    Yup.object().shape({
      name: Yup.string().required(requiredMessage),
    })
  ).unique('Bairros duplicados', neighborhood => neighborhood.name),
});

export default CreateCitySchema;
