import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';

import { userConstants } from '../_constants';

const token = cookie.load('auth');
const user = token ? jwt.verify(token, process.env.SECRET) : null;

const initialState = user ? user : {};

export function authentication(state = initialState, action){
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