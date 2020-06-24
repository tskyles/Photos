import React from 'react';
import 'styled-components/macro';
import { Flexbox } from '../..';

function MainDisplay(props){


  return(
    <Flexbox css={`
      position: relative;
      // top: -10%;
      // left: 50%;
      // transform: translateX(-50%);
      flex-direction: column;
      // background-color: white;
      width: 50%;
      margin: auto;
      // margin-top: 10%;
      height: 1800px;`}>
      <Flexbox css={`
        position: relative;
        top: 10vh;
        width: 100%;
        height: 250px;
        background-color: white;`}>

      </Flexbox>
    </Flexbox>
  )
}

export default MainDisplay;