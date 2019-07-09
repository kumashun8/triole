import {SearchStatuses} from '../actions/search'

const initialState = {
  isFetching: false,
  index: -1,
  items: [[],[],[]]
}

const shopList = (state = [initialState], action) => {
  const length = state.length
  const currentState = state[length - 1]
  let newItems = currentState.items
  switch (action.type) {
    case SearchStatuses.GET_SHOP_LIST_REQUEST:
      return [
        ...state,
        {
          isFetching: true,
          items: newItems
        }
      ]
    case SearchStatuses.GET_SHOP_LIST_SUCCESS:
      newItems[action.index - 1] = action.shopList
      return [
        ...state,
        {
          isFetching: false,
          items: newItems,
          index: action.index,
          lastUpdated: action.recievedAt
        }
      ]
    case SearchStatuses.GET_SHOP_LIST_FAILUE:
      return [
        ...state,
        {
          isFetching: false,
          error: action.error
        }
      ]
    case SearchStatuses.CLEAR_SHOP_LIST:
      newItems[action.index - 1] = []
      return [
        ...state,
        {
          isFetching: false,
          items: newItems,
          error: action.error
        }
      ]
    default:
      return state
  }
}

export default shopList

