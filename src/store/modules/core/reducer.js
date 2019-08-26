import produce from 'immer';

const INITIAL_STATE = {
  types: [],
  cities: [],
};

const core = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case '@core/LOAD_TYPES_SUCCESS': {
        draft.types = action.payload.types;
        break;
      }
      case '@core/LOAD_CITIES_SUCCESS': {
        draft.cities = action.payload.cities;
        break;
      }

      default:
    }
  });
};

export default core;
