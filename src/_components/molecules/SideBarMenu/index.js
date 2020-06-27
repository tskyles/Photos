import React, { useState, useEffect } from 'react';
import  { useSelector } from 'react-redux';
import 'styled-components/macro';

function List(props){
  const [collections, setCollections] = useState([]);
  const collectionState = useSelector(state => state.collections)

  useEffect(() => {
    setCollections(collectionState.collections);
  }, [collectionState, collections])

  return(
    <ul 
      css={`
        width: calc(100%);
        margin: 0;
        padding: 0;
        list-style-type: none;
        list-style-position: inside;
      `}>
      {collections.map((item, idx) => (
        <li 
          css={`
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          `} 
          key={idx}
          >{item.name}</li>
      ))}
    </ul>
  )
}

export default List;