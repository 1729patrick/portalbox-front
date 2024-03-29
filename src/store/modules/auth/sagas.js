import { all, takeLatest, put, call, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
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
    toast.error('Usuário ou Senha inválidos 🙁', { closeButton: false });
    yield put(signInFailure());
  }
}

export function* signInVisitor() {
  try {
    const response = yield call(api.get, 'sessions');

    let { company, token } = response.data;

    const auth = yield select(state => state.auth || {});
    if (auth.signed) {
      ({ token } = auth);
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;
    yield put(signInVisitorSuccess(company, token));
  } catch {
    yield call([localStorage, localStorage.clear]);
    yield put(signInFailure());
  }
}

export const setToken = ({ payload }) => {
  if (payload) {
    api.defaults.headers.Authorization = `Bearer ${payload.auth.token}`;
  }
};

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_IN_VISITOR_REQUEST', signInVisitor),
]);
