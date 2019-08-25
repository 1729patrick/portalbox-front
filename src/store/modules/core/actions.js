export const loadTypeRequest = () => ({ type: '@core/LOAD_TYPE_REQUEST' });

export const loadTypeSuccess = types => ({
  type: '@core/LOAD_TYPE_SUCCESS',
  payload: { types },
});

export const loadTypeFailure = () => ({ type: '@core/LOAD_TYPE_SUCCESS' });
