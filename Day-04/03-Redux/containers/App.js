import React, { Component, PropTypes } from 'react'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import Calculator from '../components/Calculator'
import * as TodoActions from '../actions'
import * as calculatorActions from '../actions/calculatorActions'


class App extends Component {
  render() {
    const { todos, calculator, todoActions, calculatorActions } = this.props
    return (
      <div>
        <Header addTodo={todoActions.addTodo} />
        <MainSection todos={todos} actions={todoActions} />
        <br/>
        <Calculator data={calculator} actions={calculatorActions}></Calculator>
      </div>
    )
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  calculator : PropTypes.object.isRequired,
  todoActions: PropTypes.object.isRequired,
  calculatorActions : PropTypes.object.isRequired
};

function mapStateToProps(state) {
  console.log('inside mapStateToProps, state -> ', state)
  return {
    todos: state.todos,
    calculator : state.calculator
  }
}

function mapDispatchToProps(dispatch) {
  console.log('inside mapDispatchToProps, dispatch -> ', dispatch)
  return {
    todoActions: bindActionCreators(TodoActions, dispatch),
    calculatorActions : bindActionCreators(calculatorActions, dispatch)
  }
}

var connector = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

console.log('connector -> ', connector);
export default connector;