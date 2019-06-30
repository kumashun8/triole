import { combineReducers } from 'redux'
import shopList from './shopList'
import selectedShop from './selectedShop'
import post from './post'

export default combineReducers({
  shopList,
  selectedShop,
  post
})
