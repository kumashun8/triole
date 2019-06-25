import { combineReducers } from 'redux'
import shopList from './shopList'
import selectedShop from './selectedShop'

export default combineReducers({
  shopList,
  selectedShop
})
