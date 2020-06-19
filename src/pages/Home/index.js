import React from 'react';
import 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../../_actions';
import { Flexbox, Button } from '../../_components';

function Home(props){
  const dispatch = useDispatch();

  const user = useSelector(state => state.authentication.user);
  console.log(user)

  function handleSubmit(e) {
    e.preventDefault();
    console.log('logout')
    dispatch(userActions.logout());
  }

  return(
    <Flexbox css={`justify-content: space-between`}>
      <div css={`color: #ffffff`}>Welcome Home {user.first_name}!</div>
      <Button onClick={handleSubmit}>LOGOUT</Button>
    </Flexbox>
  )
}

export default Home;