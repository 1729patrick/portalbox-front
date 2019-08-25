export const signInRequest = ({ username, password }) => ({
  type: '@auth/SIGN_IN_REQUEST',
  payload: { username, password },
});

export const signInVisitorRequest = () => ({
  type: '@auth/SIGN_IN_VISITOR_REQUEST',
});

export const signInSuccess = (company, token) => ({
  type: '@auth/SIGN_IN_SUCCESS',
  payload: { company, token },
});

export const signInVisitorSuccess = (company, token) => ({
  type: '@auth/SIGN_IN_VISITOR_SUCCESS',
  payload: { company, token },
});

export const signInFailure = () => ({
  type: '@auth/SIGN_IN_FAILURE',
});
