import {
  call,
  put,
  takeLatest,
  all,
  takeEvery,
  select,
} from 'redux-saga/effects';

import _ from 'lodash';

import api from '~/services/api';
import history from '~/services/history';
import { getParticular } from '~/services/fakeData';

import {
  setFilterSuccess,
  loadImmobilesSuccess,
  loadImmobilesFailure,
} from './actions';

function* save() {
  const filters = yield select(state => state.filter.filters);

  const filterWithValueSaved = Object.keys(filters).some(filter => {
    return !_.isEqual(filters[filter].saved, filters[filter].value);
  });

  if (!filterWithValueSaved) {
    return yield put(loadImmobilesFailure());
  }

  const { finality, types, neighborhoods, price } = filters;
  const typesFormatted = types.value.length
    ? JSON.stringify(types.value.map(x => x._id))
    : null;

  const neighborhoodsFormatted = neighborhoods.value.length
    ? JSON.stringify(neighborhoods.value.map(x => x._id))
    : null;

  const finalityFormatted = finality.value.value ? finality.value.value : null;

  const { min: priceMin, max: priceMax } = price.value;

  const response = yield call(api.get, 'immobiles', {
    params: {
      finality: finalityFormatted,
      types: typesFormatted,
      neighborhoods: neighborhoodsFormatted,
      limit: 40,
      priceMin,
      priceMax,
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

function* setPrice({ payload }) {
  const { price } = payload;
  const { min, max } = price;

  const { titleDefault, valueDefault } = yield select(
    state => state.filter.filters.price
  );

  if (_.isEqual(price, valueDefault)) {
    return yield put(
      setFilterSuccess({
        filter: 'price',
        title: titleDefault,
        value: {},
      })
    );
  }

  const minFormatted = `R$ ${min.toLocaleString(navigator.language, {
    minimumFractionDigits: 2,
  })}`;

  const maxFormatted = `R$ ${max.toLocaleString(navigator.language, {
    minimumFractionDigits: 2,
  })}`;

  let title = `${minFormatted} - ${maxFormatted}`;
  if (min === valueDefault.min) {
    title = `Até ${maxFormatted}`;
  } else if (max === valueDefault.max) {
    title = `Acima de ${minFormatted}`;
  }

  yield put(
    setFilterSuccess({
      filter: 'price',
      title,
      value: { min, max },
    })
  );
}

function* setParticulars({ payload }) {
  const { particulars } = payload;

  const { titleDefault, valueDefault } = yield select(
    state => state.filter.filters.particulars
  );

  if (_.isEqual(particulars, valueDefault)) {
    return yield put(
      setFilterSuccess({
        filter: 'particulars',
        title: titleDefault,
        value: valueDefault,
      })
    );
  }

  const particularsKey = Object.keys(particulars).filter(
    particular => particulars[particular] > 1
  );
  console.log(particularsKey);
  const [particular] = particularsKey;
  const valueParticular = particulars[particular];

  const title =
    particularsKey.length > 1
      ? `${particularsKey.length} características`
      : getParticular({
          title: particular,
          pos: valueParticular > 1,
          value: `${valueParticular}+`,
        });

  yield put(
    setFilterSuccess({
      filter: 'particulars',
      title,
      value: [particulars],
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
  takeEvery('@filter/SET_TYPES_FILTER', setTypes),
  takeEvery('@filter/SET_FINALITY_FILTER', setFinality),
  takeLatest('@filter/SET_NEIGHBORHOODS_FILTER', setNeighborhoods),
  takeLatest('@filter/SET_PRICE_FILTER', setPrice),
  takeLatest('@filter/SET_PARTICULARS_FILTER', setParticulars),
  takeLatest('@immobile/SEARCH_IMMOBILES_REQUEST', searchImmobiles),
  takeLatest('@immobile/SEARCH_IMMOBILES_REQUEST', setTypes),
  takeLatest('@immobile/SEARCH_IMMOBILES_REQUEST', setFinality),
  takeLatest('@immobile/SEARCH_IMMOBILES_REQUEST', setNeighborhoods),
]);
