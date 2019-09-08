export const setPopupOpenRequest = popup => ({
  type: '@filter/SET_POPUP_OPEN_REQUEST',
  payload: { popup },
});
export const saveFilterRequest = () => ({
  type: '@filter/SAVE_FILTER_REQUEST',
});

export const setTypesFilterRequest = ({ filter, value }) => ({
  type: '@filter/SET_TYPES_FILTER_REQUEST',
  payload: { filter, value },
});

export const setFilterSuccess = ({ filter, title, value }) => ({
  type: '@filter/SET_FILTER_SUCCESS',
  payload: { filter, title, value },
});
