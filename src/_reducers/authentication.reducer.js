import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';

import { userConstants } from '../_constants';

// const token = cookie.load('user', );
// const user = token ? jwt.verify(token, process.env.REACT_APP_SECRET) : null;

const initialState = (user) => {
  // if (user) {
  //   return {
  //     loggedIn: true,
  //     user: user,
  //     token: token,
  //   }
  // }
  // else {
  //   return {};
  // }
}


export function authentication(state = {}, action){
  switch(action.type){
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user.user,
        token: action.user.token
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}