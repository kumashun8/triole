export const InputStatuses = {
  UPDATE_INPUT: 'UPDATE_INPUT',
  CLEAR_INPUT: 'CLEAR_INPUT',
  CLEAR_ALL_INPUTS: 'CLEAR_ALL_INPUTS'
}

export const updateInput = (key, value) => ({
  type: 'UPDATE_INPUT',
  key,
  value
})

export const clearInput = (key) => ({
  type: 'UPDATE_INPUT',
  key
})

export const clearAllInputs = () => ({
  type: 'CLEAR_ALL_INPUTS'
})


