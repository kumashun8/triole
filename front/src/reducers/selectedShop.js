import {DetailStatuses} from '../actions/detail'

const initialState = {
  isFetching2: false,
  isSelected: false,
  shop: [{},{},{}]
}

const selectedShop = (state = [initialState], action) => {
  const length = state.length
  const currentState = state[length - 1]
  let newShop = currentState.shop
  switch (action.type) {
    case DetailStatuses.GET_SHOP_DETAIL_REQUEST:
      return [
        ...state,
        {
          isFetching2: true,
          shop: newShop
        }
      ]
    case DetailStatuses.GET_SHOP_DETAIL_SUCCESS:
      newShop[action.index - 1] = action.shop
          
      return [
        ...state,
        {
          isFetching2: false,
          shop: newShop,
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
          item: newShop,
          error: action.error
        }
      ]
    default:
      return state
  }
}

export default selectedShop