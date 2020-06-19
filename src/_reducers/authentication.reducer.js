import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';

import { userConstants } from '../_constants';

const token = cookie.load('user', );
console.log('token', token);
const user = token ? jwt.verify(token, process.env.REACT_APP_SECRET) : null;
console.log('user', user);
// let initialState = user ? user : {};

const initialState = (user) => {
  if (user) {
    return {
      loggedIn: true,
      user: user
    }
  }
  else {
    return {};
  }
}


export function authentication(state = initialState(user), action){
  switch(action.type){
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}