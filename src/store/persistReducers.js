import storage from 'redux-persist/lib/storage/session';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'portalbox',
      storage,
      whitelist: ['auth', 'company', 'theme', 'core', 'filter'],
    },
    reducers
  );

  return persistedReducer;
};
