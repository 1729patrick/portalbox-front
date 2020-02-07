/* eslint-disable no-shadow */
import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  empty: true,
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
    price: {
      title: 'Preço',
      titleDefault: 'Preço',
      value: {},
      valueDefault: {
        min: 700,
        max: 40000000,
      },
      saved: {},
    },
    particulars: {
      title: 'Características',
      titleDefault: 'Características',
      value: {},
      valueDefault: {
        bathroom: 0,
        bedroom: 0,
        garage: 0,
        furnished: false,
        garden: false,
      },
      saved: {},
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
      case '@filter/SAVE_FILTER_REQUEST': {
        draft.loading = true;
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

      case '@immobile/LOAD_IMMOBILES_SUCCESS': {
        draft.loading = false;
        draft.empty = false;

        Object.keys(draft.filters).forEach(filter => {
          draft.filters[filter].saved = draft.filters[filter].value;
        });

        const { count, immobiles } = action.payload;
        draft.result = { count, immobiles };
        break;
      }
      case '@filter/LOAD_IMMOBILES_FAILURE': {
        draft.loading = false;

        Object.keys(draft.filters).forEach(filter => {
          draft.filters[filter].saved = draft.filters[filter].value;
        });

        break;
      }

      case '@filter/SET_FILTER_EMPTY': {
        draft.loading = false;
        draft.empty = true;

        Object.keys(draft.filters).forEach(filter => {
          draft.filters[filter].saved = draft.filters[filter].value;
        });

        draft.result = {
          count: 0,
          immobiles: [],
        };
        break;
      }
      default:
    }
  });
};

export default filter;
