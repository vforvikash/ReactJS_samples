const initialState = {operationCount : 0, result : 0}

export default function calculator(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return {
        operationCount : state.operationCount+1,
        result : action.n1 + action.n2
      }
    case 'SUBTRACT':
      return {
        operationCount : state.operationCount+1,
        result : action.n1 - action.n2
      }
    case 'MULTIPLY':
      return {
        operationCount : state.operationCount+1,
        result : action.n1 * action.n2
      }
    case 'DIVIDE':
      return {
        operationCount : state.operationCount+1,
        result : action.n1 / action.n2
      }
    default :
        return state;
  }
}
