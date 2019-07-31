import { combineReducers } from 'redux'
import shopList from './shopList'
import selectedShop from './selectedShop'
import post from './post'
import index from './index'
import previews from './preview'
import form from './form'

export default combineReducers({
  shopList,
  selectedShop,
  post,
  index,
  previews,
  form
})
