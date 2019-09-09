import { put, takeLatest, all, takeEvery, select } from 'redux-saga/effects';

import { setFilterSuccess, setPopupOpenSuccess } from './actions';

function* save() {}

function* setTypes({ payload }) {
  const { filter, value } = payload;

  if (value.length) {
    const title = value.length === 1 ? value[0].name : `${value.length} tipos`;
    yield put(setFilterSuccess({ filter, title, value }));
    return;
  }

  const { titleDefault, valueDefault } = yield select(
    state => state.filter.filters[filter]
  );

  yield put(
    setFilterSuccess({ filter, title: titleDefault, value: valueDefault })
  );
}

function* setFinality({ payload }) {
  const { filter, value } = payload;

  if (value.title) {
    yield put(setFilterSuccess({ filter, title: value.title, value }));
    return;
  }

  const { titleDefault, valueDefault } = yield select(
    state => state.filter.filters[filter]
  );

  yield put(
    setFilterSuccess({ filter, title: titleDefault, value: valueDefault })
  );
}

function* setNeighborhood({ payload }) {
  const { filter, value } = payload;

  if (value.length) {
    const title =
      value.length === 1 ? value[0].name : `${value.length} bairros`;
    yield put(setFilterSuccess({ filter, title, value }));
    return;
  }

  const { titleDefault, valueDefault } = yield select(
    state => state.filter.filters[filter]
  );

  yield put(
    setFilterSuccess({ filter, title: titleDefault, value: valueDefault })
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
  takeLatest('@filter/SET_NEIGHBORHOODS_FILTER_REQUEST', setNeighborhood),
  takeLatest('@filter/SET_POPUP_OPEN_REQUEST', openPopup),
]);
