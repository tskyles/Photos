import { handleResponse } from '../_helpers';

export const collectionsService = {
  createCollection,
}

function createCollection(collectionData, bearerToken){
  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${bearerToken}`,
    },
    body: JSON.stringify(collectionData),
  };

  return fetch(`${process.env.REACT_APP_BACKEND_URI}/collections`, requestOptions)
    .then(handleResponse)
    .then(collection => collection)
    .catch(error => {
      return Promise.reject(error);
    });
}