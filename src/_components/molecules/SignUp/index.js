import { default as React, useEffect, useState } from 'react';
import 'styled-components/macro';
import { Button, Flexbox, Input, ErrorText } from '../../';
import { If, Then } from '../../util';
import { useDispatch } from 'react-redux';
import { userActions } from '../../../_actions';


function SignUp(props) {
  const [inputs, setInputs] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  })
  
  const [submitted, setSubmitted] = useState(false);
  const {first_name, last_name, email, password} = inputs;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  function handleFormSubmit(e){
    e.preventDefault();
    setSubmitted(true);
    if(Object.values(inputs).every(Boolean)){
      dispatch(userActions.register(inputs))
    }
  }
  function handleInputChange(e){
    if (submitted) setSubmitted(false);
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }


  return (
    <form onSubmit={handleFormSubmit}>
      <Flexbox css={`
        flex-direction: column;
        align-items: flex-start;
      `}>
        <Flexbox>
          <Input
            placeholder="First Name"
            name="first_name"
            onChange={handleInputChange}
            type='text'
            value={first_name}
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
            name="last_name"
            onChange={handleInputChange}
            type='text'
            value={last_name}
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
          value={email}
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
          value={password}
          css={`
            width: 410px;
            height: 30px;
            margin-bottom: 7.5px;
            padding-left: 5px;
          `}
        />
        <Flexbox>
          <Button css={`
            width: 100px;
            height: 30px;
            font-weight: bold;
          `}>Register</Button>
          <If condition={submitted && (Object.values(inputs).every(Boolean) === false)}>
            <Then>
              <ErrorText css={`margin-left: 25px; color: #ffffff`}>All fields must be filled</ErrorText>
            </Then>
          </If>
        </Flexbox>
      </Flexbox>
    </form>
  )
}

export default SignUp;