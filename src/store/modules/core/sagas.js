import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '~/services/api';

import { loadTypeSuccess, loadTypeFailure } from './actions';

export function* loadTypes() {
  try {
    const response = yield call(api.get, 'types');

    yield put(loadTypeSuccess(response.data));
  } catch {
    yield put(loadTypeFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_VISITOR_SUCCESS', loadTypes)]);
