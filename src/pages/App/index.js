import React, { useEffect, useState } from 'react';
import Landing from '../Landing';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {If, Then, Else, When} from '../../_components/util';
import Home from '../Home';
import { Route } from 'react-router-dom';
import { userActions } from '../../_actions';
import Loading from '../Loading';

function App() {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const auth = useSelector(state => state.authentication);



  useEffect(() => {
    function checkLogin() {
      if(!checked){
        dispatch(userActions.checkIfLoggedIn());
        setChecked(true);
      }
      return;
    }
    checkLogin();
  }, [dispatch, checked])


  return (
    <Route path='/' exact={true}>
      <div className="App">
        <When condition={auth.loggingIn}>
          <Loading />
        </When>
        <When condition={!auth.loggingIn && auth.loggedIn}>
          <Home />
        </When>
        <When condition={!auth.loggingIn && !auth.loggedIn}>
          <Landing />
        </When>
      </div>
    </Route>
  );
}

export default App;
