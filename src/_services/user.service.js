import cookie from 'react-cookies';
import {handleResponse} from '../_helpers';

export const userService = {
  login,
  logout,
  register,
}
// login in user
function login(type, creds){
  switch(type.toLowerCase()){
    case 'basic':
      type = 'Basic'
      const {email, password} = creds;
      creds = btoa(`${email}:${password}`);
      break;
    case 'bearer':
      type = 'Bearer';
      break;
    default:
      return console.error('Invalid request type')
  }
  
  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `${type} ${creds}`,
    },
    body: undefined,
  };

  return fetch(`${process.env.REACT_APP_BACKEND_URI}/signin/${type.toLowerCase()}`, requestOptions)
    .then(handleResponse)
    .then(user => {
      cookie.save('user', user.token, {
        path: '/',
        maxAge: 31556952
      });
      return user.user;
    })
    .catch(e => console.error(e));
};

// remove user from local storage and logout
function logout(){
  cookie.remove('user');
}

function register(userData){
  console.log(userData);
  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  };

  return fetch(`${process.env.REACT_APP_BACKEND_URI}/register`, requestOptions)
    .then(handleResponse);
}



