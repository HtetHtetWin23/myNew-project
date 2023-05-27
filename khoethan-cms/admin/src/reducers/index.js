import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import locale from './localeReducer';
import loadingReducer from './loadingReducer';
import roleReducer from './roleReducer';

export default combineReducers({
  auth: authReducer,
  locale,
  loading: loadingReducer,
  role: roleReducer,
});
