import { put, takeLatest, all, takeEvery, select } from 'redux-saga/effects';

import { setFilterSuccess, setPopupOpenSuccess } from './actions';

function* save() {}

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

function* openPopup({ payload }) {
  const { popup } = payload;

  const popupOpen = select(state => state.filter.popupOpen);

  if (popupOpen !== popup) {
    yield put(setPopupOpenSuccess(popup));
  }
}
export default all([
  takeLatest('@filter/SAVE_FILTER_REQUEST', save),
  takeEvery('@filter/SET_TYPES_FILTER_REQUEST', setTypes),
  takeEvery('@filter/SET_FINALITY_FILTER_REQUEST', setFinality),
  takeLatest('@filter/SET_NEIGHBORHOODS_FILTER_REQUEST', setNeighborhoods),
  takeLatest('@filter/SET_POPUP_OPEN_REQUEST', openPopup),
  takeLatest('@immobile/SEARCH_IMMOBILES_REQUEST', setTypes),
  takeLatest('@immobile/SEARCH_IMMOBILES_REQUEST', setFinality),
  takeLatest('@immobile/SEARCH_IMMOBILES_REQUEST', setNeighborhoods),
]);
