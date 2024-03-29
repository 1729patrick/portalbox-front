import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

const auth = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.loading = false;
        draft.signed = true;
        break;
      }
      case '@auth/SIGN_IN_VISITOR_SUCCESS': {
        draft.token = action.payload.token;
        break;
      }
      case '@auth/SIGN_IN_FAILURE': {
        break;
      }

      default:
    }
  });
};

export default auth;
