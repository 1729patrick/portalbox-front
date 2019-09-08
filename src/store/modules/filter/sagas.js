import {
  call,
  put,
  takeLatest,
  all,
  takeEvery,
  select,
} from 'redux-saga/effects';

import { setFilterSuccess } from './actions';

function* save() {}

function* setTypes({ payload }) {
  const { filter, value } = payload;
  const defaul = yield select(state => state.filter.filters.types.default);

  if (!value.length) {
    yield put(setFilterSuccess({ filter, title: defaul, value: [] }));
    return;
  }

  const title = value.length === 1 ? value[0].name : `${value.length} tipos`;
  yield put(setFilterSuccess({ filter, title, value }));
}

export default all([
  takeLatest('@filter/SAVE_FILTER_REQUEST', save),
  takeEvery('@filter/SET_TYPES_FILTER_REQUEST', setTypes),
]);
