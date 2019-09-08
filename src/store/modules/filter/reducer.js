/* eslint-disable no-shadow */
import produce from 'immer';

const INITIAL_STATE = {
  popupOpen: -1,
  loading: false,
  filters: {
    types: {
      title: 'Tipo',
      default: 'Tipo',
      value: [],
      saved: [],
    },
  },
};

const filter = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case '@filter/SET_POPUP_OPEN_REQUEST': {
        draft.popupOpen = action.payload.popup;
        break;
      }
      case '@filter/SAVE_FILTER_REQUEST': {
        draft.popupOpen = -1;

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
      default:
    }
  });
};

export default filter;
