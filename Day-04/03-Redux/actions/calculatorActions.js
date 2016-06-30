export function add(n1, n2) {
  return { type: 'ADD', n1, n2 }
}

export function subtract(n1, n2) {
  return { type: 'SUBTRACT', n1, n2 }
}

export function multiply(n1, n2) {
  return { type: 'MULTIPLY', n1, n2 }
}

export function divide(n1, n2) {
  return { type: 'DIVIDE', n1, n2 }
}