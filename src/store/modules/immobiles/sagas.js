import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';

const clean = obj => {
  return JSON.parse(
    JSON.stringify(obj, (key, value) => {
      if (value === null || value === undefined || value === '') {
        return undefined;
      }

      console.log(value);
      return value;
    })
  );
};

export function* createImmobile({ payload }) {
  const { immobile, images } = payload;

  const data = new FormData();
  images.forEach(({ _id, file }) => {
    if (!_id) {
      data.append('files', file);
    }
  });

  const responseImages = yield call(api.post, 'files', data);

  const imagesMerged = [responseImages.data, images].reduce((a, b) =>
    a.map((c, i) => Object.assign({}, c, b[i]))
  );

  const { address, particulars, map, price, owner } = immobile;
  const { type, ...onlyParticulars } = particulars;

  const particularsFormatted = Object.keys(onlyParticulars).map(k => ({
    title: k,
    value: onlyParticulars[k],
  }));

  const immobileClean = {
    address: clean(address),
    map: clean(clean(map)),
    price: clean(clean(price)),
    owner: clean(clean(owner)),
    type: clean(type),
    particulars: particularsFormatted,
    images: imagesMerged,
  };

  const responseImmobile = yield call(api.post, 'immobiles', immobileClean);

  console.log(responseImmobile);
}

export default all([
  takeLatest('@immobile/CREATE_IMMOBILES_REQUEST', createImmobile),
]);
