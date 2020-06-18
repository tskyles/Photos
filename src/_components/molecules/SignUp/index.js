import { default as React } from 'react';
import 'styled-components/macro';
import { Button, Flexbox, Input } from '../../';

function SignUp(props) {

  function handleFormSubmit() { }
  function handleInputChange() { }


  return (
    <form onSubmit={handleFormSubmit}>
      <Flexbox css={`
        flex-direction: column;
        align-items: flex-start;
      `}>
        <Flexbox>
          <Input
            placeholder="First Name"
            name="firstName"
            onChange={handleInputChange}
            type='firstName'
            css={`
              width: 200px;
              margin-right: 10px;
              height: 30px;
              margin-bottom: 7.5px;
              padding-left: 5px;
            `}
          />
          <Input
            placeholder="Last Name"
            name="lastName"
            onChange={handleInputChange}
            type='lastName'
            css={`
              width: 200px;
              height: 30px;
              margin-bottom: 7.5px;
              padding-left: 5px;
            `}
          />
        </Flexbox>
        <Input
          placeholder="Email"
          name="email"
          onChange={handleInputChange}
          type='email'
          css={`
            width: 410px;
            height: 30px;
            margin-bottom: 7.5px;
            padding-left: 5px;
          `}
        />
        <Input
          placeholder="Password"
          name="password"
          onChange={handleInputChange}
          type='password'
          css={`
            width: 410px;
            height: 30px;
            margin-bottom: 7.5px;
            padding-left: 5px;
          `}
        />
        <Button css={`
          width: 100px;
          height: 30px;
          font-weight: bold;
        `}>Register</Button>
      </Flexbox>
    </form>
  )
}

export default SignUp;