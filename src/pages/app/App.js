import React from 'react';
import { SignIn, SignUp } from '../../components';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SignIn />
        <SignUp />
      </header>
        
    </div>
  );
}

export default App;
