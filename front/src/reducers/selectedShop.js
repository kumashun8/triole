const initialState = {
  isFetching2: false,
  item: []
}

const selectedShop = (state = [initialState], action) => {
  switch (action.type) {
    case 'GET_SHOP_DETAIL_REQUEST':
      return [
        ...state,
        {
          isFetching2: true,
          item: []
        }
      ]
    case 'GET_SHOP_DETAIL_SUCCESS':
      return [
        ...state,
        {
          isFetching2: false,
          item: action.shop,
          lastUpdated: action.receivedAt
        }
      ]
    case 'GET_SHOP_DETAIL_FAILUE':
      return [
        ...state,
        {
          isFetching2: false,
          error: action.error
        }
      ]
    default:
      return state
  }
}

export default selectedShop