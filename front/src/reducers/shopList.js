import {SearchStatuses} from '../actions/search'

const initialState = {
  isFetching: false,
  items: []
}

const shopList = (state = [initialState], action) => {
  switch (action.type) {
    case SearchStatuses.GET_SHOP_LIST_REQUEST:
      return [
        ...state,
        {
          isFetching: true,
          items: []
        }
      ]
    case SearchStatuses.GET_SHOP_LIST_SUCCESS:
      return [
        ...state,
        {
          isFetching: false,
          items: action.shopList,
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
    default:
      return state
  }
}

export default shopList

