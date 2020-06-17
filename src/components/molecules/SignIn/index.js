import { default as React } from 'react';
import { Button, Flexbox, Input } from '../../';

function SignIn(props){

  function handleFormSubmit(){}
  function handleInputChange(){}


  return (
    <form onSubmit={handleFormSubmit}>
      <Flexbox>
        <Input
          placeholder="email"
          name="email"
          onChange={handleInputChange}
          type='email'
        />
        <Input
          placeholder="password"
          name="password"
          onChange={handleInputChange}
          type='password'
        />
        <Button>LOGIN</Button>
      </Flexbox>
    </form>
  )
}

export default SignIn;
