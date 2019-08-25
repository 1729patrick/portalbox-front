import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import company from './company/sagas';
import theme from './theme/sagas';
import core from './core/sagas';

export default function* rootSaga() {
  return yield all([auth, company, theme, core]);
}
