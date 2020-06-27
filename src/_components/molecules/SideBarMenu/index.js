import React, { useState, useEffect } from 'react';
import  { useSelector } from 'react-redux';
import { Li, HoverButton, Flexbox } from '../../';
import { ReactComponent as EllipsisIcon } from '../../../assets/icons/ellipsis.svg';
import 'styled-components/macro';

function List(props){
  const [collections, setCollections] = useState([]);
  const collectionState = useSelector(state => state.collections)

  useEffect(() => {
    setCollections(collectionState.collections);
  }, [collectionState, collections])

  function onHoverReveal(e){
    console.log(e.target);
    // let target = e.target.querySelector('span').value;
    e.target.style['opacity'] = '1';
  }

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
        <Li
          css={`
            width: 100%;
            height: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2px;
          `}
          key={`flex-${idx}`}>
          <div
            css={`
              width: 80%;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              margin-right: 5%;
            `}
            key={`li-${idx}`}
            >{item.name}
          </div>
          <HoverButton
            css={`
              width: 20%;
            `}
            key={`button-${idx}`}>
            <EllipsisIcon 
              css={`
                color: #000;
                width: 100%;
                height: 20px;
                margin-right: 2.5%;`
              }/>
          </HoverButton>
        </Li>
      ))}
    </ul>
  )
}

export default List;