import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
};

const immobiles = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case '@immobile/CREATE_IMMOBILES_REQUEST': {
        break;
      }
      case '@immobile/CREATE_IMMOBILES_SUCCESS': {
        break;
      }
      case '@immobile/CREATE_IMMOBILES_FAILURE': {
        break;
      }
      default:
    }
  });
};

export default immobiles;
