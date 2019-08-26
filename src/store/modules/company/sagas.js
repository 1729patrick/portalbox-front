import { all, takeLatest } from 'redux-saga/effects';

export function* signInVisitor() {}

export default all([
  takeLatest('@company/LOAD_COMPANY_REQUEST', signInVisitor),
]);
