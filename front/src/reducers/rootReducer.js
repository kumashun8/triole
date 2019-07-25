import { combineReducers } from 'redux'
import shopList from './shopList'
import selectedShop from './selectedShop'
import post from './post'
import index from './index'
import show from './show'

export default combineReducers({
  shopList,
  selectedShop,
  post,
  index,
  show
})
