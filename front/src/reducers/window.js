import { WindowStatuses } from '../actions/window'

const initialState = {
  isScrolling: false
}

const window = (state = [initialState], action) => {
  switch (action.type) {
    case WindowStatuses.IS_SCROLLING:
      return [
        ...state,
        {
          isScrolling: true
        }
      ]
    case WindowStatuses.IS_NOT_SCROLLING:
      return [
        ...state,
        {
          isScrolling: false
        }
      ]
    default:
      return state
  }
}

export default window