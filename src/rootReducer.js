import { combineReducers } from 'redux';
import bitLinkReducer from './modules/BitLink/reducer';

export default combineReducers({
  bitLink: bitLinkReducer,
});
