import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';

function ModalInner(props) {
  if(!props.show){
    document.body.style.overflow = 'auto'
    return null;
  }
  if(props.show){
    document.body.style.overflow = 'hidden'
  }

  function handleCloseByOutsideClick(e){
    if(!props.closeByOutside) return;
    if(e.target.classList.contains('modal-outer')){
      props.close();
    }
    return;
  }

  return (
    <div 
      className={'modal-outer'}
      css={`
        height: 100vh;
        width: 100%;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, .2);
        z-index: 1000;
      `}
      onClick={handleCloseByOutsideClick}>
      <div 
        className={'modal-inner'}
        css={`
          height: 300px;
          width: 500px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -100%);
          background-color: #ffffff;
          opacity: 100%;
          z-index: 1001;
          border: 1px solid #000000;
          transition: 1.1s ease-out;
          box-shadow: -2rem 2rem 2rem rgba(0, 0, 0, 0.2);
          filter: blur(0);
          // transform: scale(1);
          opacity: 1;
          visibility: visible`}>
        {props.children}</div>
    </div>
  )
}

export default ModalInner;

ModalInner.propTypes = {
  close: PropTypes.func.isRequired,
  closeByOutside: PropTypes.bool.isRequired,
  show: PropTypes.bool.isRequired
};