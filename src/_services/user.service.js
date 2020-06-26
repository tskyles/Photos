import {handleResponse} from '../_helpers';

export const userService = {
  login,
  logout,
  checkIfLoggedIn,
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
    credentials: 'include',
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
      // cookie.save('user', user.token, {
      //   path: '/',
      //   maxAge: 31556952
      // });
      return user;
    })
    .catch(error => {
      console.error(error)
      return Promise.reject(error);
    });
};

function logout(){
  return fetch(`${ process.env.REACT_APP_BACKEND_URI }/logout`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: undefined,
  })
    // .then(handleResponse)
    .then(response => {
      console.log(response);
      return response;
  })
}

function checkIfLoggedIn() {
  return fetch(`${process.env.REACT_APP_BACKEND_URI}/signin`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: undefined,
  })
    .then(handleResponse)
    .then(response => {
      console.log(response);
      return response;
    })
}

function register(userData){
  console.log(userData);
  const requestOptions = {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  };

  return fetch(`${process.env.REACT_APP_BACKEND_URI}/register`, requestOptions)
    .then(handleResponse)
    .catch(error => {
      console.error(error)
      return Promise.reject(error);
    });
}



