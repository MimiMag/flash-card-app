const initialState = [
  { name: 'title', type: 'string', value: "'The Matrix'", var: 'const', var_name: 'constant' },
  { name: 'color', type: 'string', value: "'red'", var: 'let', var_name: 'variable' },
  { name: 'color', type: 'string', value: "'blue'", var: 'const', var_name: 'constant' },
  { name: 'author', type: 'string', value: "'JK Rowling'", var: 'let', var_name: 'variable' },
  { name: 'favoriteFurniture', type: 'string', value: "'chair'", var: 'const', var_name: 'constant' },
  { name: 'firstLetter', type: 'string', value: "'A'", var: 'let', var_name: 'variable' },
  { name: 'lastLetter', type: 'string', value: "'Z'", var: 'const', var_name: 'constant' },
  { name: 'age', type: 'number', value: 21, var: 'let', var_name: 'variable' },
  { name: 'length', type: 'number', value: 187, var: 'const', var_name: 'constant' },
  { name: 'duration', type: 'number', value: 3000, var: 'let', var_name: 'variable' },
  { name: 'weight', type: 'number', value: 70, var: 'let', var_name: 'variable' },
  { name: 'halfOfFive', type: 'number', value: 2.5, var: 'let', var_name: 'variable' },
  { name: 'halfOfSeven', type: 'number', value: 3.5, var: 'const', var_name: 'constant' },
  { name: 'numberOfStudents', type: 'number', value: 25, var: 'let', var_name: 'variable' },
  { name: 'happy', type: 'boolean', value: 'true', var: 'const', var_name: 'constant' },
  { name: 'hungry', type: 'boolean', value: 'false', var: 'let', var_name: 'variable' },
  { name: 'excited', type: 'boolean', value: 'true', var: 'const', var_name: 'constant' },
  { name: 'sleepy', type: 'boolean', value: 'false', var: 'let', var_name: 'variable' },
  { name: 'grumpy', type: 'boolean', value: 'false', var: 'const', var_name: 'constant' },
  { name: 'lovely', type: 'boolean', value: 'true', var: 'let', var_name: 'variable' }
]

export default (state = initialState, { type } = {}) => {
  switch (type) {
    default:
      return initialState[Math.floor(Math.random()* initialState.length)]
  }
}
