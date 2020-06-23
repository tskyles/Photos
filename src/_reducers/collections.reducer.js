import { collectionsConstant } from '../_constants';

export function collections(state = {}, action){
  switch(action.type){
    case collectionsConstant.CREATE_REQUEST:
      return {
        creatingCollection: true,

      };
    case collectionsConstant.CREATE_SUCCESS:
      return {
        createdCollection: true,
        collections: [...state.collections, action.collection],
       };
    case collectionsConstant.CREATE_FAILURE:
      return {
        collections: [...state.collections, action.collection],
      };
    default:
       return state;
  }
}