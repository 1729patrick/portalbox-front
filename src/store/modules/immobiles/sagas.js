import { all, takeLatest, call, put, takeEvery } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { sessionsImmobiles } from '~/services/fakeData';
import history from '~/services/history';

import { loadSessionImmobilesSuccess, searchImmobilesSuccess } from './actions';

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

  const response = yield call(api.get, 'immobiles', {
    params: {
      sessions: JSON.stringify([session]),
    },
  });

  const { key } = sessionsImmobiles.find(({ _id }) => _id === session);

  const immobiles = response.data;
  yield put(loadSessionImmobilesSuccess({ sessionKey: key, immobiles }));
}

function* searchImmobiles({ payload }) {
  try {
    const { finality, types, neighborhoods } = payload;

    const response = yield call(api.get, 'immobiles', {
      params: {
        finality: finality.value,
        types: JSON.stringify(types.map(({ _id }) => _id)),
        neighborhoods: JSON.stringify(neighborhoods.map(({ _id }) => _id)),
      },
    });

    const { count, immobiles } = response.data;

    history.push('/imoveis');

    yield put(searchImmobilesSuccess({ count, immobiles }));
  } catch (e) {
    yield put(searchImmobilesSuccess({ count: 0, immobiles: [] }));
  }
}

export default all([
  takeLatest('@immobile/CREATE_IMMOBILES_REQUEST', createImmobile),
  takeEvery('@immobile/LOAD_SESSION_IMMOBILES_REQUEST', loadSession),
  takeLatest('@immobile/SEARCH_IMMOBILES_REQUEST', searchImmobiles),
]);
