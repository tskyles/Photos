import { modalConstants } from '../_constants';

const initialState = {
  show: false,
}

export function modal(state = initialState, action){
  console.log(action.type);
  switch(action.type){
    case modalConstants.SHOW_MODAL:
      return {
        ...state,
        show: true,
      }
    case modalConstants.HIDE_MODAL:
      return {
        ...state,
        show: false,
      }
    default:
      return state;
  }
}