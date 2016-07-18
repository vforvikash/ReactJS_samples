import { combineReducers } from 'redux'
import {
  REQUEST_POSTS, RECEIVE_POSTS,
  SELECT_SEARCH, INVALIDATE_SEARCH
} from './actions'

const initialState = {
  searchResults: [],
    searchText:''
}

function searchState(state=initialState, action){
  console.log('initState called->',action)
  switch (action.type) {
    case SELECT_SEARCH:
      console.log('select_search in reducers->', action);
      return {searchText: action.searchText};
    case INVALIDATE_SEARCH:
    case REQUEST_POSTS:
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        searchText: action.searchText,
        searchResults: action.searchResults
      });
      
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  searchState
})

export default rootReducer