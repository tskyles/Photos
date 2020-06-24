import { combineReducers } from 'redux';
import {alert} from './alert.reducer';
import {registration} from './registration.reducer';
import {authentication} from './authentication.reducer';
import {collections} from './collections.reducer';

let rootReducer = combineReducers({
  alert: alert,
  registration: registration,
  authentication: authentication,
  collections: collections,
});

export default rootReducer;