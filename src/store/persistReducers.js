import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'portalbox',
      storage,
      whitelist: ['auth', 'company', 'theme'],
    },
    reducers
  );

  return persistedReducer;
};
