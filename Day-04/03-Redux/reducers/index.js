import { combineReducers } from 'redux'
import todos from './todos'
import calculator from './calculator'

const rootReducer = combineReducers({
  todos : todos,
  calculator : calculator
})

export default rootReducer
