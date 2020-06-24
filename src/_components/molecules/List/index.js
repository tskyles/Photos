import React, { useState, useEffect } from 'react';
import  { useSelector } from 'react-redux';

function List(props){
  const [collections, setCollections] = useState([]);
  const collectionState = useSelector(state => state.collections)

  useEffect(() => {
    setCollections(collectionState.collections);
  }, [collectionState, collections])

  return(
    <ul>
      {collections.map((item, idx) => (
        <li key={idx}>{item.name}</li>
      ))}
    </ul>
  )
}

export default List;