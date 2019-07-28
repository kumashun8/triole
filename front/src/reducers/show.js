import { ShowStatuses } from '../actions/show'

const initalState = {
  formIsActive: false,
  activeCollection: 0
}

const show = (state = [initalState], action) => {
  const length = state.length
  const currentState = state[length - 1]
  switch (action.type) {
    case ShowStatuses.TOGGLE_POSTING_FORM:
      return [
        ...state,
        {
          formIsActive: !currentState.formIsActive,
          activeCollection: currentState.activeCollection
        }
      ]
    case ShowStatuses.TOGGLE_COLLECTION_DETAIL:
      return [
        ...state,
        {
          formIsActive: currentState.formIsActive,
          activeCollection: action.index
        }
      ]
    default:
      return state
  }
}

export default show