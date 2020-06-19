import {userConstants} from '../_constants';
import {userService} from '../_services';
import {alertActions} from '../_actions';
import {history} from '../_helpers';

export const userActions = {
  login,
  logout,
  register,
}

function login(email, password){
  return dispatch => {
    dispatch(request({email}));

    userService.login(email, password)
      .then(
        user => {
          dispatch(success(user));
          // history.push('/');
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      )
  }

  function request(user) { return {type: userConstants.LOGIN_REQUEST, user}};
  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } };
  function failure(user) { return { type: userConstants.LOGIN_FAILURE, user } };
}

function logout(){
  userService.logout();
  return {type: userConstants.LOGOUT};
}

function register(userData){
  return dispatch => {
    dispatch(request(userData.email));

    userService.register(userData)
      .then(
        user => {
          dispatch(success());
          // history.push('/login');
          dispatch(alertActions.success('Registration Successful'));
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      )
  }

  function request(user) { return { type: userConstants.REGISTER_REQUEST, user } };
  function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } };
  function failure(user) { return { type: userConstants.REGISTER_FAILURE, user } };
}