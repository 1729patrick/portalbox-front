import {
  call,
  put,
  takeLatest,
  all,
  takeEvery,
  select,
} from 'redux-saga/effects';

import api from '~/services/api';
import history from '~/services/history';

import { setFilterSuccess, loadImmobilesSuccess } from './actions';

function* save() {
  const { finality, types, neighborhoods } = yield select(
    state => state.filter.filters
  );

  const typesFormatted = types.saved.length
    ? JSON.stringify(types.saved.map(x => x._id))
    : null;

  const neighborhoodsFormatted = neighborhoods.saved.length
    ? JSON.stringify(neighborhoods.saved.map(x => x._id))
    : null;

  const finalityFormatted = finality.saved.value ? finality.saved.value : null;

  const response = yield call(api.get, 'immobiles', {
    params: {
      finality: finalityFormatted,
      types: typesFormatted,
      neighborhoods: neighborhoodsFormatted,
      limit: 40,
    },
  });

  const { count, immobiles } = response.data;

  yield put(loadImmobilesSuccess({ count, immobiles }));
}

function* setTypes({ payload }) {
  const { types } = payload;

  if (types.length) {
    const title = types.length === 1 ? types[0].name : `${types.length} tipos`;
    yield put(setFilterSuccess({ filter: 'types', title, value: types }));
    return;
  }

  const { titleDefault, valueDefault } = yield select(
    state => state.filter.filters.types
  );

  yield put(
    setFilterSuccess({
      filter: 'types',
      title: titleDefault,
      value: valueDefault,
    })
  );
}

function* setFinality({ payload }) {
  const { finality } = payload;

  if (finality.title) {
    return yield put(
      setFilterSuccess({
        filter: 'finality',
        title: finality.title,
        value: finality,
      })
    );
  }

  const { titleDefault, valueDefault } = yield select(
    state => state.filter.filters.finality
  );

  yield put(
    setFilterSuccess({
      filter: 'finality',
      title: titleDefault,
      value: valueDefault,
    })
  );
}

function* setNeighborhoods({ payload }) {
  const { neighborhoods } = payload;

  if (neighborhoods.length) {
    const title =
      neighborhoods.length === 1
        ? neighborhoods[0].name
        : `${neighborhoods.length} bairros`;
    yield put(
      setFilterSuccess({ filter: 'neighborhoods', title, value: neighborhoods })
    );
    return;
  }

  const { titleDefault, valueDefault } = yield select(
    state => state.filter.filters.neighborhoods
  );

  yield put(
    setFilterSuccess({
      filter: 'neighborhoods',
      title: titleDefault,
      value: valueDefault,
    })
  );
}

function* searchImmobiles({ payload }) {
  try {
    history.push('/imoveis');

    const { finality, types, neighborhoods } = payload;

    const typesFormatted = types.length
      ? JSON.stringify(types.map(({ _id }) => _id))
      : null;

    const neighborhoodsFormatted = neighborhoods.length
      ? JSON.stringify(neighborhoods.map(({ _id }) => _id))
      : null;

    if (!typesFormatted && !neighborhoodsFormatted && !finality.value) {
      throw new Error();
    }

    const response = yield call(api.get, 'immobiles', {
      params: {
        finality: finality.value,
        types: typesFormatted,
        neighborhoods: neighborhoodsFormatted,
        limit: 40,
      },
    });

    const { count, immobiles } = response.data;

    yield put(loadImmobilesSuccess({ count, immobiles }));
  } catch (e) {
    history.push('/imoveis');
    yield put(loadImmobilesSuccess({ count: 0, immobiles: [] }));
  }
}

export default all([
  takeLatest('@filter/SAVE_FILTER_REQUEST', save),
  takeEvery('@filter/SET_TYPES_FILTER_REQUEST', setTypes),
  takeEvery('@filter/SET_FINALITY_FILTER_REQUEST', setFinality),
  takeLatest('@filter/SET_NEIGHBORHOODS_FILTER_REQUEST', setNeighborhoods),
  takeLatest('@immobile/SEARCH_IMMOBILES_REQUEST', searchImmobiles),
  takeLatest('@immobile/SEARCH_IMMOBILES_REQUEST', setTypes),
  takeLatest('@immobile/SEARCH_IMMOBILES_REQUEST', setFinality),
  takeLatest('@immobile/SEARCH_IMMOBILES_REQUEST', setNeighborhoods),
]);
