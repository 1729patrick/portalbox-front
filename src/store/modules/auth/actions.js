export const signInVisitorRequest = () => ({
  type: '@auth/SIGN_IN_VISITOR_REQUEST',
});

export const signInSuccess = (company, token) => ({
  type: '@auth/SIGN_IN_SUCCESS',
  payload: { company, token },
});

export const signInFailure = () => ({
  type: '@auth/SIGN_IN_FAILURE',
});
