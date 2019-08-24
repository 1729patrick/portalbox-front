import { all, takeLatest, put, call } from 'redux-saga/effects';
import api from '~/services/api';

export function* signInVisitor() {
  try {
    const response = yield call(api.get, 'sessions');
  } catch (e) {}
}

export default all([
  takeLatest('@company/LOAD_COMPANY_REQUEST', signInVisitor),
]);
