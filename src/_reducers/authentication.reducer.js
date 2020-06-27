import { userConstants } from '../_constants';

const initialState = {
  loggedIn: false,
  loggingIn: true,
  user: {},
}


export function authentication(state = initialState, action){
  switch(action.type){
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        loggedIn: false,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
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