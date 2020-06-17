import { default as React } from 'react';
import 'styled-components/macro';
import { Button, Flexbox, Input } from '../../';

function SignIn(props){

  function handleFormSubmit(){}
  function handleInputChange(){}


  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <Flexbox>
          <Input
            placeholder="email"
            name="email"
            onChange={handleInputChange}
            type='email'
            css={`
              width: 125px;
              height: 20px;
              margin-right: 2.5px;
              padding-left: 5px;
            `}
          />
          <Input
            placeholder="password"
            name="password"
            onChange={handleInputChange}
            type='password'
            css={`
              width: 125px;
              height: 20px;
              margin-left: 2.5px;
              padding-left: 5px;
            `}
          />
          <Button css={`
            height: 20px;
            margin-left: 5px;
            font-weight: bold;
          `}>LOGIN</Button>
        </Flexbox>
      </form>
    </>
  )
}

export default SignIn;
