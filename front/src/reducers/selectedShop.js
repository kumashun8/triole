const initialState = {
  isFetching2: false,
  selectedShop: []
}

const selectedShoop = (state = [initialState], action) => {
  switch (action.type) {
    case 'GET_SHOP_DETAIL_REQUEST':
      return [
        ...state,
        {
          isFetching2: true,
          selectedShop: []
        }
      ]
    case 'GET_SHOP_DETAIL_SUCCESS':
      return [
        ...state,
        {
          isFetching2: false,
          selectedShop: action.shop,
          lastUpdated: action.recievedAt
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

export default selectedShoop