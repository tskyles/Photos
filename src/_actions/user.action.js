import {userConstants} from '../_constants';
import {userService} from '../_services';
import {alertActions} from '../_actions';
import {history} from '../_helpers';

export const userActions = {
  login,
  logout,
  register,
  getAll,
  delete: _delete,
}

function login(email, password){
  return dispatch => {
    dispatch(request({email}));

    userService.login(email, password)
      .then(
        user => {
          dispatch(success(user));
          history.push('/');
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

function register(email, password){
  return dispatch => {
    dispatch(request(user));

    userService.register(email, password)
      .then(
        user => {
          dispatch(success());
          history.push('/login');
          dispatch(alertActions.success('Registration Successful'));
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      )
  }

  function request(user) { return { type: userConstants.REGISTRATION_REQUEST, user } };
  function success(user) { return { type: userConstants.REGISTRATION_SUCCESS, user } };
  function failure(user) { return { type: userConstants.REGISTRATION_FAILURE, user } };
}