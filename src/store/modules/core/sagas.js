import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
  loadTypesSuccess,
  loadTypesFailure,
  loadCitiesSuccess,
  loadCitiesFailure,
  createCitySuccess,
  updateCitySuccess,
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

export function* createCity({ payload }) {
  try {
    const city = {
      ...payload.city,
      neighborhoods: payload.city.neighborhoods.map(({ name }) => name),
    };

    yield call(api.post, 'cities', city);
    yield put(createCitySuccess());
    toast.success('Cidade cadastrada com sucesso 🥳');
  } catch (e) {
    toast.error(
      e.response?.data?.error?.message ||
        'Confira os dados e tente novamente. Aconteceu algum erro ao cadastrar a cidade 😢'
    );
  }
}

export function* updateCity({ payload }) {
  try {
    yield call(api.put, 'cities', payload.city);
    yield put(updateCitySuccess());
    toast.success('Cidade atualizada com sucesso 🥳');
  } catch (e) {
    toast.error(
      e.response?.data?.error?.message ||
        'Confira os dados e tente novamente. Aconteceu algum erro ao atualizar os dados da cidade 😢'
    );
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_VISITOR_SUCCESS', loadCities),
  takeLatest('@auth/SIGN_IN_VISITOR_SUCCESS', loadTypes),
  takeLatest('@core/CREATE_CITY_REQUEST', createCity),
  takeLatest('@core/UPDATE_CITY_REQUEST', updateCity),
  takeLatest('@core/CREATE_CITY_SUCCESS', loadCities),
  takeLatest('@core/UPDATE_CITY_SUCCESS', loadCities),
]);
