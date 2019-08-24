import produce from 'immer';

const INITIAL_STATE = {
  colors: null,
};

const theme = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case '@theme/LOAD_COLORS_SUCCESS': {
        draft.colors = action.payload.colors;
        break;
      }

      default:
    }
  });
};

export default theme;
