const INITIAL_STATE = null;

const company = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS': {
      return action.payload.company;
    }
    case '@auth/SIGN_IN_VISITOR_SUCCESS': {
      return action.payload.company;
    }
    // case '@company/LOAD_COMPANY_REQUEST': {
    //   break;
    // }
    // case '@company/LOAD_COMPANY_SUCCESS': {
    //   break;
    // }
    // case '@company/LOAD_COMPANY_FAILURE': {
    //   break;
    // }

    default:
      return state;
  }
};

export default company;
