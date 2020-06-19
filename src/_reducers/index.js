import { combineReducers } from 'redux';
import {alert} from './alert.reducer';
import {registration} from './registration.reducer';
import {authentication} from './authentication.reducer';

let rootReducer = combineReducers({
  alert: alert,
  registration: registration,
  authentication: authentication,
});

export default rootReducer;