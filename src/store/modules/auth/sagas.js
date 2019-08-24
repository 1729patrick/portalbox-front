import { all, takeLatest, put, call } from 'redux-saga/effects';
import api from '~/services/api';

import { signInSuccess, signInFailure } from './actions';

export function* signInVisitor() {
  try {
    const response = yield call(api.get, 'sessions');

    const { company, token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(company, token));
  } catch (e) {
    yield put(signInFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_VISITOR_REQUEST', signInVisitor),
]);
