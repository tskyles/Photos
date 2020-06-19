import React from 'react';
import 'styled-components/macro';
import { Flexbox, SignIn, SignUp } from '../../_components';

function Landing(props){

  return(
    <>
      <Flexbox css={`
        background-color: #ffffff;
        height: 10vh;
        justify-content: flex-end;
        padding: 0 25vw;
      `}>
        <h1 css={`
          margin-right: auto;
        `}>Photos</h1>
        <SignIn css={`
          margin-left: auto;
        `}/>
      </Flexbox>

      <Flexbox css={`
        justify-content: flex-end;
        height: 80vh;
        padding: 0 25vw;
      `}>
        <Flexbox css={`
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          margin-bottom: auto;
        `}>
          <h1 css={`color: #ffffff`}>Create a New Account</h1>
          <SignUp />
        </Flexbox>
      </Flexbox>
      
      <Flexbox css={`
        background-color: #ffffff;
        height: 10vh;
        justify-content: flex-end;
        padding: 0 25vw;
      `}>
      </Flexbox>
    </>
  )
}

export default Landing;