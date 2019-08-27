import produce from 'immer';

const INITIAL_STATE = {
  images: [],
  files: [],
  failures: [],
};

const file = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case '@file/UPLOAD_IMAGES_IMMOBILE_SUCCESS': {
        draft.images = action.payload.images;
        break;
      }
      default:
    }
  });
};

export default file;
