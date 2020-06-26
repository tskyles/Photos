import { userConstants } from '../_constants';

const initialState = {
  loggedIn: false,
  loggingIn: true,
}


export function authentication(state = initialState, action){
  switch(action.type){
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        loggedIn: false,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggingIn: false,
        loggedIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loggingIn: false,
        loggedIn: false,
      };


    case userConstants.LOGOUT:
      return {
        loggedIn: false,
        loggingIn: false,
      };
    default:
      return state;
  }
}