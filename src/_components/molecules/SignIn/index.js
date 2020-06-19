import { default as React, useState, useEffect } from 'react';
import 'styled-components/macro';
import { Button, Flexbox, Input, ErrorText } from '../..';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../../_actions';
import { If, Then } from '../../util'

function SignIn(props){
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  })
  const [submitted, setSubmitted] = useState(false);
  const {email, password} = inputs;
  // const loggingIn = useSelector(state => state.authentication.loggingIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  function handleFormSubmit(e){
    e.preventDefault();
    setSubmitted(true);
    if(email && password){
      dispatch(userActions.login(email, password));
    }
  }

  function handleInputChange(e){
    if(submitted) setSubmitted(false);
    const {name, value} = e.target;
    setInputs(inputs => ({...inputs, [name]: value}));
  }

  return (
    <>
      <form name='form' onSubmit={handleFormSubmit} css={``}>
        <Flexbox>
          <Input
            placeholder="email"
            name="email"
            onChange={handleInputChange}
            type='email'
            value={email}
            css={`
              width: 125px;
              height: 20px;
              padding-left: 5px;
            `}
          />
          <Input
            placeholder="password"
            name="password"
            onChange={handleInputChange}
            type='password'
            value={password}
            css={`
              width: 125px;
              height: 20px;
              margin-left: 10px;
              padding-left: 5px;
            `}
          />
          <Button 
            css={`
              height: 20px;
              margin-left: 10px;
              font-weight: bold;
            `}
          >LOGIN</Button>
        </Flexbox>

        <Flexbox css={`position: absolute;`}>
          <If condition={submitted && (!email || !password)}>
            <Then>
              <If condition={submitted && (!email && !password)}>
                <Then>
                  <ErrorText css={`margin-left: 5px;`}>email and password are required</ErrorText>
                </Then>
              </If>
              <If condition={submitted && (!email && password)}>
                <Then>
                  <ErrorText css={`margin-left: 5px;`}>email is required</ErrorText>
                </Then>
              </If>
              <If condition={submitted && (email && !password)}>
                <Then>
                  <ErrorText css={`margin-left: 5px;`}>password is required</ErrorText>
                </Then>
              </If>
            </Then>
          </If>

        </Flexbox>
      </form>
    </>
  )
}

export default SignIn;
