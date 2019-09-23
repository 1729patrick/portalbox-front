import { all, takeLatest, put, call } from 'redux-saga/effects';
import api from '~/services/api';

import { loadColorsSuccess } from './actions';

function* loadColors({ payload }) {
  try {
    const response = yield call(
      api.get,
      `static/core/colors/${payload.company._id}.json`
    );

    yield put(loadColorsSuccess(response.data));
  } catch (e) {
    const response = yield call(api.get, `static/core/colors/_default.json`);

    yield put(loadColorsSuccess(response.data));
  }
}

export default all([takeLatest('@auth/SIGN_IN_VISITOR_SUCCESS', loadColors)]);
