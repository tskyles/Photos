import { collectionsConstants } from '../_constants';
import { collectionsService } from '../_services';
import { alertActions } from '../_actions';

export const collectionsActions = {
  createCollection,
}

function createCollection(collectionData, bearerToken){
  return dispatch => {
    dispatch(request(collectionData));

    collectionsService.createCollection(collectionData, bearerToken)
      .then(
        collection => {
          console.log('collection', collection)
          dispatch(success(collection))
        }
      )
      .catch(error => {
        console.log('error', error);
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      })
  }

  function request(collection) { return { type: collectionsConstants.CREATE_REQUEST, collection } };
  function success(collection) { return { type: collectionsConstants.CREATE_SUCCESS, collection } };
  function failure(collection) { return { type: collectionsConstants.CREATE_FAILURE, collection } };
}