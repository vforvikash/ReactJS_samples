import fetch from 'isomorphic-fetch'

function doSearch(searchText) {
  return dispatch => {
    dispatch(requestSearch(searchText))
    return fetch(`http://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(subreddit, json)))
  }
}