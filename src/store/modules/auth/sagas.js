import { all, takeLatest, put, call } from 'redux-saga/effects';
import api from '~/services/api';

import { signInSuccess, signInVisitorSuccess, signInFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { username, password } = payload;

    const response = yield call(api.post, 'sessions', { username, password });

    const { company, token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(company, token));
  } catch {
    yield put(signInFailure());
  }
}

export function* signInVisitor() {
  try {
    const response = yield call(api.get, 'sessions');

    const { company, token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInVisitorSuccess(company, token));
  } catch {
    yield put(signInFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_IN_VISITOR_REQUEST', signInVisitor),
]);
