import { FormStatuses } from '../actions/form'

const initialState = {
  show: false
}

const form = (state = [initialState], action) => {
  switch (action.type) {
    case FormStatuses.FORM_OPEN:
      console.log(action)
      return [
        ...state,
        {
          show: true
        }
      ]
    case FormStatuses.FORM_CLOSE:
      console.log(action)
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