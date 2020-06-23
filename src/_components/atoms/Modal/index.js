import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';

export default function Modal(props){
  if (!this.props.show) {
    return null;
  }
  return (
    <div css={`
      background-color: #ffffff;
      border: 1px solid #000000;
      transition: 1.1s ease-out;
      box-shadow: -2rem 2rem 2rem rgba(0, 0, 0, 0.2);
      filter: blur(0);
      transform: scale(1);
      opacity: 1;
      visibility: visible
    `}>{this.props.children}</div>
  )
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};