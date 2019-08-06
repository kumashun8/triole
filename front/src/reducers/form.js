import { FormStatuses } from '../actions/form'

const initialState = {
  show: false
}

const form = (state = [initialState], action) => {
  switch (action.type) {
    case FormStatuses.OPEN_FORM:
      return [
        ...state,
        {
          show: true
        }
      ]
    case FormStatuses.CLOSE_FORM:
      return [
        ...state,
        {
          show: false
        }
      ]
    default:
      return state
  }
}

export default form