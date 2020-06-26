import React, { useEffect } from 'react';
import Landing from '../Landing';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {If, Then, Else, When} from '../../_components/util';
import Home from '../Home';
import { Route } from 'react-router-dom';
import { handleResponse } from '../../_helpers';
import { userActions } from '../../_actions';

function App() {
  const dispatch = useDispatch();

  const auth = useSelector(state => state.authentication);
  const user = useSelector(state => state.authentication.user)


  useEffect(() => {
    dispatch(userActions.checkIfLoggedIn());
  }, [dispatch])


  return (
    <Route path='/' exact={true}>
      <div className="App">
        <When condition={!auth.loggingIn && auth.loggedIn}>
          <Home />
        </When>
        <When condition={(!auth.loggingIn && !auth.loggedIn) || (auth.loggingIn && !auth.loggedIn)}>
          <Landing />
        </When>
      </div>
    </Route>
  );
}

export default App;
