/* eslint-disable no-restricted-globals */
import { all, takeLatest, call, put, takeEvery } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { sessionsImmobiles } from '~/services/fakeData';

import { loadSessionImmobilesSuccess } from './actions';

export function* createImmobile({ payload }) {
  try {
    const { immobile } = payload;
    const { images } = immobile;

    const data = new FormData();
    images.forEach(({ _id, image }) => {
      if (!_id) {
        data.append('files', image);
      }
    });

    const responseImages = yield call(api.post, 'files', data);

    const imagesMerged = [responseImages.data, images].reduce((a, b) =>
      a.map((c, i) => ({ ...c, ...b[i] }))
    );

    const {
      address,
      type,
      particulars,
      allParticulars,
      map,
      price,
      owner,
      config,
      rates,
    } = immobile;

    const particularsComplete = Object.assign(particulars, allParticulars);
    // console.log('particularsComplete', Object.entries(particularsComplete));

    const particularsFormatted = Object.entries(particularsComplete)
      .map(([title, value]) => ({
        title,
        value: isNaN(+value) ? value : +value,
      }))
      .filter(({ value }) => value);
    // console.log('particularsFormatted', particularsFormatted);

    const ratesFormatted = Object.entries(rates)
      .map(([title, value]) => ({
        title,
        value,
      }))
      .filter(({ value }) => value);
    // console.log('ratesFormatted', ratesFormatted);

    const imagesMergedFormatted = imagesMerged.map(
      ({ _id, url, description }) => ({ file: _id, url, description })
    );
    // console.log('imagesMergedFormatted', imagesMergedFormatted);
    // console.log('config.sessions',config.sessions);
    const sessionsFormatted = config.sessions
      ? config.sessions.map(({ _id }) => _id)
      : [];
    // console.log('sessionsFormatted', sessionsFormatted);

    // console.log('address', address);
    // console.log('map', map);
    // console.log('price', price);
    // console.log('owner', owner);
    // console.log('type', type);
    const immobileClean = {
      address,
      map,
      price,
      owner,
      type,
      config: { sessions: sessionsFormatted },
      particulars: particularsFormatted,
      images: imagesMergedFormatted,
      rates: ratesFormatted,
    };

    yield call(api.post, 'immobiles', immobileClean);

    toast.success('Imóvel cadastrado com sucesso 🥳');
  } catch (e) {
    toast.error(
      e.response?.data?.error?.message ||
        'Confira os dados e tente novamente. Aconteceu algum erro ao criar o imóvel 😢'
    );
  }
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

  const response = yield call(api.get, 'public/immobiles', {
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
