import * as Yup from 'yup';

export const requiredMessage = 'Este campo precisa ser preenchido';

export const numberNullable = () =>
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

Yup.addMethod(Yup.array, 'unique', function(message, mapper = a => a) {
  return this.test('unique', message, function(list) {
    return list.length === new Set(list.map(mapper)).size;
  });
});

Yup.addMethod(Yup.number, 'bestNullable', function(message = '') {
  return this.test('bestNullable', message, function(number) {
    return number >= 0 && typeof number === 'number';
  });
});

export default Yup;
