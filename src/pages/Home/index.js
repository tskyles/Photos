import React, { useEffect } from 'react';
import 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../../_actions';
import { Flexbox, Button, CollectionsSidebar, MainDisplay } from '../../_components';
import { collectionsActions } from '../../_actions';

function Home(props){
  const dispatch = useDispatch();

  const token = useSelector(state => state.authentication.token);
  const user_id = useSelector(state => state.authentication.user._id);

  useEffect(() => {
    dispatch(collectionsActions.getCollections(user_id, token));
    console.log(document.cookie)
  })

  function handleSubmit(e) {
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

        <Button css={`margin-right: 50%`} onClick={handleSubmit}>LOGOUT</Button>
      </Flexbox>

      {/* <Flexbox css={`
        // justify-content: space-between;
        align-items: flex-start;
        height: 90%;
      `}> */}
      
      {/* <Flexbox css={`
        // position: fixed;
        // left: 50%;
        // position: relative;
        // transform: translateXY-15%);
        // background-color: #282c34;

        margin: auto;
        width: 50%;
        height: 100%;
        align-items: flex-start;
        padding: 0 2.5% 2.5%;`}> */}
        <CollectionsSidebar />
        <MainDisplay />
        {/* </Flexbox> */}
      {/* </Flexbox> */}

      {/* <Flexbox css={`
        background-color: #ffffff;
        height: 10vh;
        justify-content: flex-end;
        padding: 0 25%;
      `}>
      </Flexbox> */}
    </>
  )
}

export default Home;