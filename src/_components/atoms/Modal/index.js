import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { ModalInner } from '../../';
import 'styled-components/macro';

function Modal(props){
  return ReactDOM.createPortal(<ModalInner {...props} />, document.querySelector('#modal'));
}

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  closeByOutside: PropTypes.bool.isRequired,
  show: PropTypes.bool.isRequired
};

export default Modal;