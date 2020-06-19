import React from 'react';
import { useSelector } from 'react-redux';

function Home(props){
  const user = useSelector(state => state.authentication.user);
  console.log(user)
  return(
    <div>Welcome Home {user.first_name}!</div>
  )
}

export default Home;