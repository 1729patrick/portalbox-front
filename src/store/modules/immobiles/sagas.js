import { all, takeLatest, call, put, takeEvery } from 'redux-saga/effects';
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

  const {
    address,
    type,
    particulars,
    allParticulars,
    map,
    price,
    owner,
    sessions,
    rates,
  } = immobile;

  const particularsComplete = Object.assign(particulars, allParticulars);

  const particularsFormatted = Object.keys(particularsComplete)
    .map(k => {
      try {
        return {
          title: k,
          value: JSON.parse(particularsComplete[k]),
        };
      } catch (e) {
        return {
          title: k,
          value: particularsComplete[k],
        };
      }
    })
    .filter(({ value }) => value);

  const ratesFormatted = Object.keys(rates)
    .map(k => {
      try {
        return {
          title: k,
          value: JSON.parse(rates[k]),
        };
      } catch (e) {
        return {
          title: k,
          value: rates[k],
        };
      }
    })
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
    rates: ratesFormatted,
  };

  yield call(api.post, 'immobiles', immobileClean);

  toast.success('Imóvel cadastrado com sucesso');
}

export function* loadSession({ payload }) {
  const { session } = payload;
  const { key } = sessionsImmobiles.find(({ _id }) => _id === session);

  // const { sessionLoaded } = select(state => state.immobiles[key]);

  // if (sessionLoaded.count) {
  //   const { immobiles } = sessionLoaded;

  //   return yield put(
  //     loadSessionImmobilesSuccess({ sessionKey: key, immobiles })
  //   );
  // }

  const response = yield call(api.get, 'immobiles', {
    params: {
      sessions: JSON.stringify([session]),
      limit: 8,
    },
  });

  const immobiles = response.data;
  yield put(loadSessionImmobilesSuccess({ sessionKey: key, immobiles }));
}

export default all([
  takeLatest('@immobile/CREATE_IMMOBILES_REQUEST', createImmobile),
  takeEvery('@immobile/LOAD_SESSION_IMMOBILES_REQUEST', loadSession),
]);
