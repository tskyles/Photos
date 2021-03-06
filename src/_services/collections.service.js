import { handleResponse } from '../_helpers';

export const collectionsService = {
  createCollection,
  getCollections,
}

function createCollection(collectionData){
  const requestOptions = {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
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

function getCollections(userID) {
  const requestOptions = {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: undefined,
  };

  return fetch(`${process.env.REACT_APP_BACKEND_URI}/collections/user/${userID}`, requestOptions)
    .then(handleResponse)
    .then(collections => collections)
    .catch(error => {
      return Promise.reject(error);
    });
}