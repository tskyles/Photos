
// login in user
function login(email, password){
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  };

  return fetch(`${process.env.API_URI_LOCAL}/signin`, requestOptions)
    .then(handleResponse)
    .then(user => {
      // store user details and JWT in local storage to allow user to stay logged in between pages
      localStorage.setItem('user', JSON.stringify(user));
      return user
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