import { FormStatuses } from '../actions/form'

const initialState = {
  show: false
}

const form = (state = [initialState], action) => {
  switch (action.type) {
    case FormStatuses.FORM_OPEN:
      return [
        ...state,
        {
          show: true
        }
      ]
    case FormStatuses.FORM_CLOSE:
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