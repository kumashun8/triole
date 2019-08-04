import axios from 'axios'
import { API_URI } from './index'

export const SearchStatuses = {
  GET_SHOP_LIST_REQUEST: 'GET_SHOP_LIST_REQUEST',
  GET_SHOP_LIST_SUCCESS: 'GET_SHOP_LIST_SUCCESS',
  GET_SHOP_LIST_FAILUE: 'GET_SHOP_LIST_FAILUE',
  CLEAR_SHOP_LIST: 'CLEAR_SHOP_LIST'
}

export const getShopListRequest = () => ({
  type: 'GET_SHOP_LIST_REQUEST'
})

export const getShopListSuccess = (json, index) => ({
  type: 'GET_SHOP_LIST_SUCCESS',
  shopList: json,
  index,
  receivedAt: Date.now()
})

export const getShopListFaiue = (error) => ({
  type: 'GET_SHOP_LIST_FAILUE',
  error
})

export const requestIsNotExist = () => ({
  type: 'GET_SHOP_LIST_FAILUE',
  shopList: []
})

export const clearShopList = (index) => ({
  type: 'CLEAR_SHOP_LIST',
  index
})

export const getShopList = (text, index) => {
  return (dispatch) => {
    dispatch(getShopListRequest())
    return axios.get(API_URI + '/api/v1/search/' + text)
      .then(res => {
        console.log(res.data.predictions)
        dispatch(getShopListSuccess(res.data.predictions, index))
      }
      ).catch(err => 
      dispatch(getShopListFaiue(err))
    )
  }
}