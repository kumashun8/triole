import { ShowStatuses } from '../actions/show'

const initalState = {
  formIsActive: false,
  activeCollection: -1
}

const show = (state = [initalState], action) => {
  switch (action.type) {
    case ShowStatuses.TOGGLE_POSTING_FORM:
      return [
        ...state,
        {
          formIsActive: !state.formIsActive,
          activeCollection: state.activeCollection
        }
      ]
    case ShowStatuses.TOGGLE_COLLECTION_DETAIL:
      return [
        ...state,
        {
          formIsActive: state.formIsActive,
          activeCollection: action.index
        }
      ]
    default:
      return state
  }
}

export default show