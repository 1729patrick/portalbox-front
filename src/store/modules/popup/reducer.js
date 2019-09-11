const INITIAL_STATE = -1;

const filter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '@filter/SET_POPUP_OPEN_REQUEST':
      return action.payload.popup;

    case '@filter/SAVE_FILTER_REQUEST':
      return -1;

    default:
      return state;
  }
};

export default filter;
