import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { sessionsImmobiles } from '~/services/fakeData';

import { loadSessionImmobilesSuccess } from './actions';

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

  const { address, particulars, map, price, owner, sessions } = immobile;
  const { type, ...onlyParticulars } = particulars;

  const particularsFormatted = Object.keys(onlyParticulars)
    .map(k => ({
      title: k,
      value: onlyParticulars[k],
    }))
    .filter(({ value }) => value);

  const imagesMergedFormatted = imagesMerged.map(
    ({ _id, url, description }) => ({ file: _id, url, description })
  );

  const immobileClean = {
    address,
    map,
    price,
    owner,
    type,
    config: { sessions },
    particulars: particularsFormatted,
    images: imagesMergedFormatted,
  };

  yield call(api.post, 'immobiles', immobileClean);

  toast.success('Imóvel cadastrado com sucesso');
}

export function* loadSession({ payload }) {
  const { sessions } = payload;

  const response = yield call(api.get, 'immobiles', {
    params: {
      sessions: JSON.stringify(sessions),
    },
  });

  const { key } = sessionsImmobiles.find(({ _id }) => _id === sessions[0]);

  const immobiles = response.data;
  yield put(loadSessionImmobilesSuccess({ sessionKey: key, immobiles }));
}

export default all([
  takeLatest('@immobile/CREATE_IMMOBILES_REQUEST', createImmobile),
  takeLatest('@immobile/LOAD_SESSION_IMMOBILES_REQUEST', loadSession),
]);
