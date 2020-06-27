import React from 'react';
import 'styled-components/macro';
import { useDispatch } from 'react-redux';
import { userActions } from '../../_actions';
import { Flexbox, Button, CollectionsSidebar, MainDisplay } from '../../_components';

function Home(){
  const dispatch = useDispatch();

  function handleLogoutSubmit(e) {
    e.preventDefault();
    dispatch(userActions.logout());
  }

  return(
    <>
      <Flexbox css={`
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        background-color: #ffffff;
        height: 7.5%;
        width: 100%;
        justify-content: flex-end;
        padding: 0 25%;
      `}>
        <h1 css={`
          margin-right: auto;
        `}>Photos</h1>

        <Button css={`margin-right: 50%`} onClick={handleLogoutSubmit}>LOGOUT</Button>
      </Flexbox>
      <CollectionsSidebar />
      <MainDisplay />
    </>
  )
}

export default Home;