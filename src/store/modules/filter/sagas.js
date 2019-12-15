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
  setFilterEmpty,
  loadImmobilesSuccess,
  loadImmobilesFailure,
} from './actions';

function* save() {
  const filters = yield select(state => state.filter.filters);

  const filterChanged = Object.keys(filters).some(filter => {
    return !_.isEqual(filters[filter].saved, filters[filter].value);
  });

  if (!filterChanged) {
    return yield put(loadImmobilesFailure());
  }

  const filterDirty = Object.keys(filters).some(filter => {
    const isEqual = _.isEqual(
      filters[filter].value,
      filters[filter].valueDefault
    );

    return !(
      isEqual ||
      (_.isEqual(filters[filter].value, {}) &&
        !_.isEqual(filters[filter].valueDefault, {}))
    );
  });

  if (!filterDirty) {
    return yield put(setFilterEmpty());
  }

  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });

  const { finality, types, neighborhoods, price, particulars } = filters;

  const typesFormatted = types.value.length
    ? JSON.stringify(types.value.map(x => x._id))
    : null;

  const neighborhoodsFormatted = neighborhoods.value.length
    ? JSON.stringify(neighborhoods.value.map(x => x._id))
    : null;

  const finalityFormatted = finality.value.value ? finality.value.value : null;

  const { min: priceMin, max: priceMax } = price.value;

  let particularsFormatted = Object.keys(particulars.value)
    .filter(
      particular =>
        particulars.value[particular] !== particulars.valueDefault[particular]
    )
    .map(particular => ({
      title: particular,
      value: particulars.value[particular],
    }));

  particularsFormatted = particularsFormatted.length
    ? JSON.stringify(particularsFormatted)
    : null;

  const response = yield call(api.get, 'public/immobiles', {
    params: {
      finality: finalityFormatted,
      types: typesFormatted,
      neighborhoods: neighborhoodsFormatted,
      limit: 40,
      priceMin,
      priceMax,
      particulars: particularsFormatted,
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
    particular => particulars[particular] !== valueDefault[particular]
  );

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
      value: particulars,
    })
  );
}

function* searchImmobiles({ payload }) {
  history.push('/imoveis');

  try {
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

    const response = yield call(api.get, 'public/immobiles', {
      params: {
        finality: finality.value,
        types: typesFormatted,
        neighborhoods: neighborhoodsFormatted,
        limit: 40,
      },
    });

    const { count, immobiles } = response.data;

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    yield put(loadImmobilesSuccess({ count, immobiles }));
  } catch (e) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    yield put(setFilterEmpty());
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
]);
