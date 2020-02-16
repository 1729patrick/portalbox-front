export const loadTypesRequest = () => ({ type: '@core/LOAD_TYPES_REQUEST' });

export const loadTypesSuccess = types => ({
  type: '@core/LOAD_TYPES_SUCCESS',
  payload: { types },
});

export const loadTypesFailure = () => ({ type: '@core/LOAD_TYPES_SUCCESS' });

export const loadCitiesRequest = () => ({ type: '@core/LOAD_CITIES_REQUEST' });

export const loadCitiesSuccess = cities => ({
  type: '@core/LOAD_CITIES_SUCCESS',
  payload: { cities },
});

export const loadCitiesFailure = () => ({ type: '@core/LOAD_CITIES_SUCCESS' });

export const createCityRequest = city => ({
  type: '@core/CREATE_CITY_REQUEST',
  payload: { city },
});

export const createCitySuccess = () => ({ type: '@core/CREATE_CITY_SUCCESS' });

export const updateCityRequest = city => ({
  type: '@core/UPDATE_CITY_REQUEST',
  payload: { city },
});

export const updateCitySuccess = () => ({ type: '@core/UPDATE_CITY_SUCCESS' });
