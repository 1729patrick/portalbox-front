import produce from 'immer';

const INITIAL_STATE = {
  types: [],
};

const core = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case '@core/LOAD_TYPE_SUCCESS': {
        draft.types = action.payload.types;
        break;
      }

      default:
    }
  });
};

export default core;
