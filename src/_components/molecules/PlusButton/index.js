import React from 'react';
import { ReactComponent as PlusLogo } from '../../../assets/icons/plus.svg';
import 'styled-components/macro';


function PlusButton(props){

  return(
    <span onClick={props.onClick} css={`cursor: pointer`}>
      <PlusLogo css={`color: #000; width: 15px; height: 15px; margin-right: 5px;`}/>{props.text}</span>
  )
}

export default PlusButton;