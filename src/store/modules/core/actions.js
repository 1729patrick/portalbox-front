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
