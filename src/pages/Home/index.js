import React, { useEffect } from 'react';
import 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../../_actions';
import { Flexbox, Button, CollectionsSidebar } from '../../_components';
import { collectionsActions } from '../../_actions';

function Home(props){
  const dispatch = useDispatch();

  const token = useSelector(state => state.authentication.token);
  const user_id = useSelector(state => state.authentication.user._id);

  useEffect(() => {
    dispatch(collectionsActions.getCollections(user_id, token));
  })

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(userActions.logout());
  }

  return(
    <>
      <Flexbox css={`
        background-color: #ffffff;
        height: 10vh;
        justify-content: flex-end;
        padding: 0 25%;
      `}>
        <h1 css={`
          margin-right: auto;
        `}>Photos</h1>

        <Button onClick={handleSubmit}>LOGOUT</Button>
      </Flexbox>

      <Flexbox css={`
        // justify-content: space-between;
        align-items: flex-start;
        height: 80vh;
        padding: 2.5% 20%;
      `}>
        <div css={`background-color: #d1d1d1; width: 100%; height: 100%;`}>
          <CollectionsSidebar />
        </div>
      </Flexbox>

      <Flexbox css={`
        background-color: #ffffff;
        height: 10vh;
        justify-content: flex-end;
        padding: 0 25%;
      `}>
      </Flexbox>
    </>
  )
}

export default Home;