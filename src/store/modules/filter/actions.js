export const setPopupOpenRequest = popup => ({
  type: '@filter/SET_POPUP_OPEN_REQUEST',
  payload: { popup },
});

export const setPopupOpenSuccess = popup => ({
  type: '@filter/SET_POPUP_OPEN_SUCCESS',
  payload: { popup },
});

export const saveFilterRequest = () => ({
  type: '@filter/SAVE_FILTER_REQUEST',
});

export const setTypesFilterRequest = ({ filter, value }) => ({
  type: '@filter/SET_TYPES_FILTER_REQUEST',
  payload: { filter, value },
});

export const setFinalityFilterRequest = ({ filter, value }) => ({
  type: '@filter/SET_FINALITY_FILTER_REQUEST',
  payload: { filter, value },
});

export const setNeighborhoodsFilterRequest = ({ filter, value }) => ({
  type: '@filter/SET_NEIGHBORHOODS_FILTER_REQUEST',
  payload: { filter, value },
});

export const setFilterSuccess = ({ filter, title, value }) => ({
  type: '@filter/SET_FILTER_SUCCESS',
  payload: { filter, title, value },
});
