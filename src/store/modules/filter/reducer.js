/* eslint-disable no-shadow */
import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  filters: {
    types: {
      title: 'Tipo',
      titleDefault: 'Tipo',
      value: [],
      valueDefault: [],
      saved: [],
    },
    finality: {
      title: 'Finalidade',
      titleDefault: 'Finalidade',
      value: {},
      valueDefault: {},
      saved: {},
    },
    neighborhoods: {
      title: 'Bairro',
      titleDefault: 'Bairro',
      value: [],
      valueDefault: [],
      saved: [],
    },
  },
  result: {
    count: 0,
    immobiles: [],
  },
};

const filter = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case '@filter/SET_POPUP_OPEN_SUCCESS': {
        Object.keys(draft.filters).forEach(filter => {
          draft.filters[filter].saved = draft.filters[filter].value;
        });

        break;
      }
      case '@filter/SAVE_FILTER_REQUEST': {
        Object.keys(draft.filters).forEach(filter => {
          draft.filters[filter].saved = draft.filters[filter].value;
        });

        break;
      }
      case '@filter/SET_FILTER_SUCCESS': {
        const { filter, title, value } = action.payload;

        draft.filters[filter].title = title;
        draft.filters[filter].value = value;
        break;
      }

      case '@immobile/SEARCH_IMMOBILES_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@immobile/SEARCH_IMMOBILES_SUCCESS': {
        draft.loading = false;

        const { count, immobiles } = action.payload;
        draft.result = { count, immobiles };
        break;
      }

      default:
    }
  });
};

export default filter;
