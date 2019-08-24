import { combineReducers } from 'redux';

import auth from './auth/reducer';
import company from './company/reducer';
import theme from './theme/reducer';

export default combineReducers({
  auth,
  company,
  theme,
});
