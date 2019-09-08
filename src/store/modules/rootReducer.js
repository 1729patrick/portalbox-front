import { combineReducers } from 'redux';

import auth from './auth/reducer';
import company from './company/reducer';
import theme from './theme/reducer';
import core from './core/reducer';
import immobiles from './immobiles/reducer';
import filter from './filter/reducer';

export default combineReducers({
  auth,
  company,
  theme,
  core,
  immobiles,
  filter,
});
