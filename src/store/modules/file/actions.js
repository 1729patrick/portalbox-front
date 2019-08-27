export const uploadImagesImmobileRequest = ({ images }) => ({
  type: '@file/UPLOAD_IMAGES_IMMOBILE_REQUEST',
  payload: { images },
});

export const uploadImagesImmobileSuccess = images => ({
  type: '@file/UPLOAD_IMAGES_IMMOBILE_SUCCESS',
  payload: { images },
});

export const uploadFilesError = () => ({ type: '@file/UPLOAD_FILES_FAILURE' });
