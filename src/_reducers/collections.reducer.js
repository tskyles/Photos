import { collectionsConstants } from '../_constants';

const initialState = {
  collections: [],
}

export function collections(state = initialState, action){
  switch(action.type){
    case collectionsConstants.CREATE_REQUEST:
      return {
        ...state,
        creatingCollection: true,
        createdCollection: false,
      };
    case collectionsConstants.CREATE_SUCCESS:
      return {
        ...state,
        creatingCollection: false,
        createdCollection: true,
        collections: [...state.collections, action.collection],
       };
    case collectionsConstants.CREATE_FAILURE:
      return {...state};


    case collectionsConstants.GET_ALL_REQUEST:
      return {
        ...state,
        fetchingCollections: true,
        fetchedCollections: false,
      };
    case collectionsConstants.GET_ALL_SUCCESS:
      return {
        ...state,
        fetchingCollections: false,
        fetchedCollections: true,
        collections: action.collections,
      };
    case collectionsConstants.GET_ALL_FAILURE:
      return {
        ...state,
        fetchingCollections: false,
        fetchedCollections: false,
      };
    default:
       return state;
  }
}