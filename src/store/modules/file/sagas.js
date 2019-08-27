import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { uploadImagesImmobileSuccess } from './actions';

function* uploadImagesImmobile({ payload }) {
  const { images } = payload;

  const data = new FormData();
  images.forEach(({ _id, file }) => {
    if (!_id) {
      data.append('files', file);
    }
  });

  const response = yield call(api.post, 'files', data);

  const imagesMerged = [response.data, images].reduce((a, b) =>
    a.map((c, i) => Object.assign({}, c, b[i]))
  );

  // toast.success('Fotos salvas com sucesso');
  yield put(uploadImagesImmobileSuccess(imagesMerged));
}

export default all([
  takeLatest('@file/UPLOAD_IMAGES_IMMOBILE_REQUEST', uploadImagesImmobile),
]);
