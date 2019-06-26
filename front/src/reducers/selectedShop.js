import {DetailStatuses} from '../actions/detail'

const initialState = {
  isFetching2: false,
  isSelected: false,
  item: []
}

const selectedShop = (state = [initialState], action) => {
  switch (action.type) {
    case DetailStatuses.GET_SHOP_DETAIL_REQUEST:
      return [
        ...state,
        {
          isFetching2: true,
          item: []
        }
      ]
    case DetailStatuses.GET_SHOP_DETAIL_SUCCESS:
      return [
        ...state,
        {
          isFetching2: false,
          item: action.shop,
          isSelected: action.isSelected,
          lastUpdated: action.receivedAt
        }
      ]
    case DetailStatuses.GET_SHOP_DETAIL_FAILUE:
      return [
        ...state,
        {
          isFetching2: false,
          isSelected: action.isSelected,
          item: action.shop,
          error: action.error
        }
      ]
    default:
      return state
  }
}

export default selectedShop