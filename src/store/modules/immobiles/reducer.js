/* eslint-disable no-shadow */
import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  news: {
    count: 0,
    immobiles: [],
  },
  saleHighlights: {
    count: 0,
    immobiles: [],
  },
  rentalHighlights: {
    count: 0,
    immobiles: [],
  },
  offersOfWeek: {
    count: 0,
    immobiles: [],
  },
  moreViewedOfWeek: {
    count: 0,
    immobiles: [],
  },
  search: {
    count: 0,
    immobiles: [],
  },
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

      case '@immobile/LOAD_SESSION_IMMOBILES_SUCCESS': {
        const { sessionKey, immobiles } = action.payload;
        draft[sessionKey] = immobiles;
        break;
      }

      case '@immobile/SEARCH_IMMOBILES_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@immobile/SEARCH_IMMOBILES_SUCCESS': {
        draft.loading = false;

        const { count, immobiles } = action.payload;
        draft.search = { count, immobiles };
        break;
      }
      default:
    }
  });
};

export default immobiles;
