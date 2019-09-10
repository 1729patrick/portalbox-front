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

export const setTypesFilterRequest = ({ types }) => ({
  type: '@filter/SET_TYPES_FILTER_REQUEST',
  payload: { types },
});

export const setFinalityFilterRequest = ({ finality }) => ({
  type: '@filter/SET_FINALITY_FILTER_REQUEST',
  payload: { finality },
});

export const setNeighborhoodsFilterRequest = ({ neighborhoods }) => ({
  type: '@filter/SET_NEIGHBORHOODS_FILTER_REQUEST',
  payload: { neighborhoods },
});

export const setFilterSuccess = ({ filter, title, value }) => ({
  type: '@filter/SET_FILTER_SUCCESS',
  payload: { filter, title, value },
});
