import React, { useEffect } from 'react';
import Landing from '../Landing';
import './App.css';
import { useSelector } from 'react-redux';
import {If, Then, Else} from '../../_components/util';
import Home from '../Home';
import { Route } from 'react-router-dom';

function App() {
  const loggedIn = useSelector(state => state.authentication.loggedIn);

  function checkLoggedIn() {
    return fetch(`${process.env.REACT_APP_BACKEND_URI}/signin`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: undefined,
    })
      .then(response => {
        console.log(response);
      })
  }

  useEffect(() => {
    console.log('got here');
    console.log('cookies', document.cookie)

    checkLoggedIn();
  })


  return (
    <Route path='/' exact={true}>
      <div className="App">
        <If condition={loggedIn}>
          <Then>
            <Home />
          </Then>
          <Else>
            <Landing />
          </Else>
        </If>
      </div>
    </Route>
  );
}

export default App;
