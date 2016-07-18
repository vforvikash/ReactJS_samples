import fetch from 'isomorphic-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_SEARCH = 'SELECT_SEARCH'
export const INVALIDATE_SEARCH = 'INVALIDATE_SEARCH'

export function selectSearchText(searchText) {
  console.log('select search text');
  return {
    type: SELECT_SEARCH,
    searchText: searchText
  }
}

export function invalidateSearch(searchText) {
  return {
    type: INVALIDATE_SEARCH,
    searchText: searchText
  }
}

function requestPosts(searchText) {
  return {
    type: REQUEST_POSTS,
    ssearchText: searchText
  }
}

function receivePosts(searchText, json) {
  console.log('post received->',searchText);
  console.log('json received->',json);
  var searchResults = [];
  json.map(child=>{
    searchResults.push({
      id: child.id,
      reservationName: child.reservationName
    })
  });
  console.log('searchResults--->',searchResults);
  return {
    type: RECEIVE_POSTS,
    searchText,
    searchResults: searchResults
  }
}

function receiveSearch(searchText, json) {
  console.log('post received->',searchText);
  console.log('json received->',json);
  var searchResults = [];
  json._embedded.reservations.map(child=>{
    searchResults.push({
      id: child.id,
      reservationName: child.reservationName
    })
  });
  console.log('searchResults--->',searchResults);
  return {
    type: RECEIVE_POSTS,
    searchText,
    searchResults: searchResults
  }
}

export function fetchPosts(searchText) {
  console.log('fetch Post for searchText->',searchText)
  if(searchText==='')
    return dispatch => {
      dispatch(requestPosts(searchText))
      return fetch('http://localhost:8080/get_all')
        .then(response => response.json())
        .then(json => dispatch(receivePosts(searchText, json)))
    }
  return dispatch => {
    dispatch(requestPosts(searchText))
    return fetch('http://localhost:8080/reservations/search/by-name?rn='+searchText)
      .then(response => response.json())
      .then(json => dispatch(receiveSearch(searchText, json)))
  }
}

function shouldFetchPosts(state, searchText) {

  const posts = state.resultsByCriteria[searchText]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

export function fetchPostsIfNeeded(searchText) {
  console.log('fetchPostsIfNeeded is called->',searchText);
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), searchText)) {
      return dispatch(fetchPosts(searchText))
    }
  }
}