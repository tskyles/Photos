import { collectionsConstants } from '../_constants';
import { collectionsService } from '../_services';
import { alertActions } from '../_actions';

export const collectionsActions = {
  createCollection,
  getCollections,
}

function createCollection(collectionData, bearerToken){
  return dispatch => {
    dispatch(request(collectionData));

    collectionsService.createCollection(collectionData, bearerToken)
      .then(
        collection => {
          dispatch(success(collection))
        }
      )
      .catch(error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      })
  }

  function request(collection) { return { type: collectionsConstants.CREATE_REQUEST, collection } };
  function success(collection) { return { type: collectionsConstants.CREATE_SUCCESS, collection } };
  function failure(collection) { return { type: collectionsConstants.CREATE_FAILURE, collection } };
}

function getCollections(userID){
  return dispatch => {
    dispatch(request([]));

    collectionsService.getCollections(userID)
      .then(
        collections => {
          dispatch(success(collections))
        }
      )
      .catch(error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      })
  }

  function request(collections) { return { type: collectionsConstants.GET_ALL_REQUEST, collections } };
  function success(collections) { return { type: collectionsConstants.GET_ALL_SUCCESS, collections } };
  function failure(collections) { return { type: collectionsConstants.GET_ALL_FAILURE, collections } };
}