import React from 'react';
import 'styled-components/macro';
import { Flexbox } from '../../_components';

function Loading(props) {

  return (
    <Flexbox css={`
      align-items: center;
      justify-content: center;
    `}>
      Loading...
    </Flexbox>
  )
}

export default Loading;