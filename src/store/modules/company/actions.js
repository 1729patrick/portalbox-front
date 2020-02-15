export const loadCompanyRequest = () => ({
  type: '@company/LOAD_COMPANY_REQUEST',
});

export const loadCompanySuccess = company => ({
  type: '@company/LOAD_COMPANY_SUCCESS',
  payload: { company },
});

export const loadCompanyFailure = () => ({
  type: '@company/LOAD_COMPANY_FAILURE',
});

export const updateCompanyRequest = company => ({
  type: '@company/UPDATE_COMPANY_REQUEST',
  payload: { company },
});
