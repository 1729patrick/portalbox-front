import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '~/services/api';

import {
  loadTypesSuccess,
  loadTypesFailure,
  loadCitiesSuccess,
  loadCitiesFailure,
} from './actions';

export function* loadTypes() {
  try {
    const response = yield call(api.get, 'public/types');

    yield put(loadTypesSuccess(response.data));
  } catch {
    yield put(loadTypesFailure());
  }
}

export function* loadCities() {
  try {
    const response = yield call(api.get, 'public/cities');

    yield put(loadCitiesSuccess(response.data));
  } catch {
    yield put(loadCitiesFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_VISITOR_SUCCESS', loadCities),
  takeLatest('@auth/SIGN_IN_VISITOR_SUCCESS', loadTypes),
]);
