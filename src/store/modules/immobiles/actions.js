export const createImmobilesRequest = immobile => ({
  type: '@immobile/CREATE_IMMOBILES_REQUEST',
  payload: { immobile },
});

export const createImmobilesSuccess = () => ({
  type: '@immobile/CREATE_IMMOBILES_SUCCESS',
});

export const createImmobilesFailure = () => ({
  type: '@immobile/CREATE_IMMOBILES_FAILURE',
});

export const loadSessionImmobilesRequest = ({ session }) => ({
  type: '@immobile/LOAD_SESSION_IMMOBILES_REQUEST',
  payload: { session },
});

export const loadSessionImmobilesSuccess = ({ sessionKey, immobiles }) => ({
  type: '@immobile/LOAD_SESSION_IMMOBILES_SUCCESS',
  payload: { sessionKey, immobiles },
});
