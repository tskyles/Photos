import { default as React } from 'react';
import { Button, Flexbox, Input } from '../../';

function SignUp(props) {

  function handleFormSubmit() { }
  function handleInputChange() { }


  return (
    <form onSubmit={handleFormSubmit}>
      <Flexbox flexDirection='column'>
        <Flexbox>
          <Input
            placeholder="firstName"
            name="firstName"
            onChange={handleInputChange}
            type='firstName'
          />
          <Input
            placeholder="lastName"
            name="lastName"
            onChange={handleInputChange}
            type='lastName'
          />
        </Flexbox>
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
        <Button>Register</Button>
      </Flexbox>
    </form>
  )
}

export default SignUp;