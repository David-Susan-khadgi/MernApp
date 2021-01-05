// This is used by Provider. It acts as a meeting point
// for all state to be in global state zone REDUX   
import { combineReducers } from 'redux';
import itemReducer from './itemReducer';

export default combineReducers({
  item: itemReducer
});
