import produce from 'immer';

const INITIAL_STATE = {
  company: null,
};

const company = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.company = action.payload.company;
        break;
      }
      case '@company/LOAD_COMPANY_REQUEST': {
        break;
      }
      case '@company/LOAD_COMPANY_SUCCESS': {
        break;
      }
      case '@company/LOAD_COMPANY_FAILURE': {
        break;
      }

      default:
    }
  });
};

export default company;
