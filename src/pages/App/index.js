import React, { useEffect } from 'react';
import Landing from '../Landing';
import './App.css';
import { useSelector } from 'react-redux';
import {If, Then, Else} from '../../_components/util';
import Home from '../Home';

function App() {
  const loggedIn = useSelector(state => state.authentication.loggedIn);

  useEffect(() => {}, [loggedIn])


  return (
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
  );
}

export default App;
