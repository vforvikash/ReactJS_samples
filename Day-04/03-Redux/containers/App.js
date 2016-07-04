import React, { Component, PropTypes } from 'react'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import Calculator from '../components/Calculator'
import Search from '../components/Search'
import * as TodoActions from '../actions'
import * as calculatorActions from '../actions/calculatorActions'
import * as searchAction from '../actions/searchAction'


class App extends Component {
  render() {
    const { todos, calculator, todoActions, calculatorActions, searchResult, searchAction } = this.props
    return (
      <div>
        <Header addTodo={todoActions.addTodo} />
        <MainSection todos={todos} actions={todoActions} />
        <br/>
        <Calculator data={calculator} actions={calculatorActions}></Calculator>

        <Search searchResult={searchResult} action={searchAction}/>
      </div>
    )
  }
}

//defining properties
App.propTypes = {
  todos: PropTypes.array.isRequired,
  calculator : PropTypes.object.isRequired,
  todoActions: PropTypes.object.isRequired,
  calculatorActions : PropTypes.object.isRequired,
  searchResult: PropTypes.array.isRequired,
  searchAction: PropTypes.object.isRequired
};


//Here mapping actual state to above given properties - so redux will be aware about the state 
//which are connected to props and can update based on change
//State is initialized at reducer
function mapStateToProps(state) {
  console.log('inside mapStateToProps, state -> ', state)
  return {
    todos: state.todos,
    calculator : state.calculator,
    searchResult : state.searchResult
  }
}

//Here mapping Actions with Dispatcher
function mapDispatchToProps(dispatch) {
  console.log('inside mapDispatchToProps, dispatch -> ', dispatch)
  return {
    todoActions: bindActionCreators(TodoActions, dispatch),
    calculatorActions : bindActionCreators(calculatorActions, dispatch),
    searchAction: bindActionCreators(searchAction, dispatch)
  }
}

//connecting actions and state with redux
var connector = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

console.log('connector -> ', connector);
export default connector;