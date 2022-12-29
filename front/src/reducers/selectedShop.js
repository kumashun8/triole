import {DetailStatuses} from '../actions/detail'

const initialState = {
  isFetching: false,
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
          isFetching: true,
          shop: newShop
        }
      ]
    case DetailStatuses.GET_SHOP_DETAIL_SUCCESS:
      newShop[action.index - 1] = action.shop
          
      return [
        ...state,
        {
          isFetching: false,
          shop: newShop,
          lastUpdated: action.receivedAt
        }
      ]
    case DetailStatuses.GET_SHOP_DETAIL_FAILUE:
      return [
        ...state,
        {
          isFetching: false,
          shop: newShop,
          error: action.error
        }
      ]
    case DetailStatuses.CLEAR_SELECTED_SHOP:
      newShop[action.index - 1] = {}
      return [
        ...state,
        {
          isFetching: false,
          shop: newShop
        }
      ]
    default:
      return state
  }
}

export default selectedShop