export const saveFilterRequest = () => ({
  type: '@filter/SAVE_FILTER_REQUEST',
});

export const setTypesFilter = ({ types }) => ({
  type: '@filter/SET_TYPES_FILTER',
  payload: { types },
});

export const setFinalityFilter = ({ finality }) => ({
  type: '@filter/SET_FINALITY_FILTER',
  payload: { finality },
});

export const setNeighborhoodsFilterRequest = ({ neighborhoods }) => ({
  type: '@filter/SET_NEIGHBORHOODS_FILTER',
  payload: { neighborhoods },
});

export const setPriceFilter = ({ price }) => ({
  type: '@filter/SET_PRICE_FILTER',
  payload: { price },
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
