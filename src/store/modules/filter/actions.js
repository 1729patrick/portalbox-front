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

export const searchImmobilesRequest = ({ finality, types, neighborhoods }) => ({
  type: '@immobile/SEARCH_IMMOBILES_REQUEST',
  payload: { finality, types, neighborhoods },
});

export const loadImmobilesSuccess = ({ count, immobiles }) => ({
  type: '@immobile/LOAD_IMMOBILES_SUCCESS',
  payload: { count, immobiles },
});
