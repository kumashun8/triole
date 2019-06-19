import shopList from '../apiConnect/shopList'

const searchWord = (state = [], action) => {
  switch (action.type) {
    case 'SEARCHING_SHOP':
      return shopList(action.text)
    default:
      return state
  }
}

export default searchWord

