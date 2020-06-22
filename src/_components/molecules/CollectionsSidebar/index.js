import 'styled-components/macro';
import React from 'react';
import { Flexbox, PlusButton } from '../../';

function CollectionsSidebar(props){
  const [collections, setCollections] = [];

  function handleClick(e){
    console.log('created new collection');
  }

  return (
    <Flexbox css={`
      flex-direction: column;
      width: 25%;
      justify-content: flex-start;
      align-items: flex-start;
    `}>
      <h3>My Collections</h3>
      <PlusButton onClick={handleClick} text='Create'/>
    </Flexbox>
  )
}

export default CollectionsSidebar;