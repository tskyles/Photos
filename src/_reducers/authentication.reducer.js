import { userConstants } from '../_constants';

const initialState = {
  loggedIn: false,
  loggingIn: true,
}


export function authentication(state = initialState, action){
  console.log(action);
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
        // token: action.user.token
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loggingIn: false,
        loggedIn: false,
      };


    case userConstants.LOADING_CREDENTIALS_REQUEST:
      return {
        loadingCredentials: true,
        loadedCredentials: false,
      }
    case userConstants.LOADING_CREDENTIALS_SUCCESS:
      return {
        loadingCredentials: false,
        loadedCredentials: true,
      }
    case userConstants.LOADING_CREDENTIALS_FAILURE:
      return {
        loadingCredentials: false,
        loadedCredentials: false,
      }


    case userConstants.LOGOUT:
      return {
        loggedIn: false,
        loggingIn: false,
      };
    default:
      return state;
  }
}