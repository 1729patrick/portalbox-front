export const createImmobilesRequest = (immobile, images) => ({
  type: '@immobile/CREATE_IMMOBILES_REQUEST',
  payload: { immobile, images },
});

export const createImmobilesSuccess = () => ({
  type: '@immobile/CREATE_IMMOBILES_SUCCESS',
});

export const createImmobilesFailure = () => ({
  type: '@immobile/CREATE_IMMOBILES_FAILURE',
});
