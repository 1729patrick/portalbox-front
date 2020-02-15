import { all, takeLatest, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

export function* signInVisitor() {}

export function* updateCompany({ payload }) {
  try {
    const { company } = payload;

    yield call(api.put, 'companies', company);

    toast.success('Empresa atualizada com sucesso 🥳');
  } catch (e) {
    toast.error(
      e.response?.dat1a?.err2or?.message ||
        'Confira os dados e tente novamente. Aconteceu algum erro ao atualizar os dados empresa 😢'
    );
  }
}

export default all([
  takeLatest('@company/LOAD_COMPANY_REQUEST', signInVisitor),
  takeLatest('@company/UPDATE_COMPANY_REQUEST', updateCompany),
]);
