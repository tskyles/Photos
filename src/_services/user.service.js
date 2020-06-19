import cookie from 'react-cookies';

// login in user
function login(email, password){
  const encodedCreds = btoa(`${email}:${password}`);
  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Basic ${encodedCreds}`,
    },
    body: undefined,
  };
 
  return fetch(`${process.env.REACT_APP_BACKEND_URI}/signin`, requestOptions)
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
  localStorage.removeItem('user');
}

function register(user){
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
  };

  return fetch(`${process.env.BACKEND_URI}/register`, requestOptions)
    .then(handleResponse);
}


function handleResponse(response){
  return response.text()
    .then(text => {
      const data = text && JSON.parse(text);
      if(!response.ok){
        if(response.status === 401){
          logout();
        }
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      return data;
    })
}

export const userService = {
  login,
  logout,
  register,
}