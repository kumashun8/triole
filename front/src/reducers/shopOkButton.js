const initialState = {
  isSelected: false
}

const shopOkButton = (state = [initialState], action) => {
  switch (action.type) {
    case 'TOGGLE_SHOP':
      return {
        isSelected: !state.isSelected
      }
    default:
      return state
  }
}

export default shopOkButton