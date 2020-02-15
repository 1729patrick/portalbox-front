import { all, takeLatest, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

export function* signInVisitor() {}

export function* updateCompany({ payload }) {
  try {
    let { company } = payload;

    const data = new FormData();
    if (company.logo.file) {
      data.append('files', company.logo.file);
    }

    if (company.banner.file) {
      data.append('files', company.banner.file);
    }

    if ([...data.entries()].length) {
      const responseImages = yield call(api.post, 'files', data);

      const images = responseImages.data;
      images.forEach(image => {
        if (image.name === company.banner.file?.name)
          company = { ...company, banner: image };
        else if (image.name === company.logo?.file?.name)
          company = { ...company, logo: image };
      });
    }

    yield call(api.put, 'companies', company);

    toast.success('Empresa atualizada com sucesso 🥳');
  } catch (e) {
    toast.error(
      e.response?.data?.error?.message ||
        'Confira os dados e tente novamente. Aconteceu algum erro ao atualizar os dados empresa 😢'
    );
  }
}

export default all([
  takeLatest('@company/LOAD_COMPANY_REQUEST', signInVisitor),
  takeLatest('@company/UPDATE_COMPANY_REQUEST', updateCompany),
]);
