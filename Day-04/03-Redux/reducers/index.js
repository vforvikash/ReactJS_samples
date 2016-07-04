import { combineReducers } from 'redux'
import todos from './todos'
import calculator from './calculator'
import searchResult from './search'

const rootReducer = combineReducers({
  todos : todos,
  calculator : calculator,
  searchResult : searchResult
})

export default rootReducer
