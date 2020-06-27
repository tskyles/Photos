import { modalConstants } from '../_constants';

export const modalActions = {
  hideModal,
  showModal,
}

function hideModal(){
  return dispatch => {
    dispatch({ type: modalConstants.HIDE_MODAL });
  }
}

function showModal() {
  return dispatch => {
    dispatch({ type: modalConstants.SHOW_MODAL });
  }
}