import axios from 'axios'

export const DetailStatuses = {
  GET_SHOP_DETAIL_REQUEST: 'GET_SHOP_DETAIL_REQUEST',
  GET_SHOP_DETAIL_SUCCESS: 'GET_SHOP_DETAIL_SUCCESS',
  GET_SHOP_DETAIL_FAILUE: 'GET_SHOP_DETAIL_FAILUE',
  CLEAR_SELECTED_SHOP: 'CLEAR_SELECTED_SHOP'
}

export const getShopDetailRequest = () => ({
  type: 'GET_SHOP_DETAIL_REQUEST'
})

export const getShopDetailSuccess = (json, index) => ({
  type: 'GET_SHOP_DETAIL_SUCCESS',
  shop: json,
  index,
  receivedAt: Date.now()
})

export const getShopDetailFaiue = (error) => ({
  type: 'GET_SHOP_DETAIL_FAILUE',
  error
})

export const requestIsNotExist = () => ({
  type: 'GET_SHOP_DETAIL_FAILUE',
})

export const clearSelectedShop = (index) => ({
  type: 'CLEAR_SELECTED_SHOP',
  index
})

export const getShopDetail = (placeId, index) => {
  return (dispatch) => {
    dispatch(getShopDetailRequest())
    return axios.get(process.env.REACT_APP_API_URI + '/api/v1/detail/' + placeId)
      .then(res => {
        // console.log(res.data.result)
        dispatch(getShopDetailSuccess(res.data.result, index))
      }
      ).catch(err =>
        dispatch(getShopDetailFaiue(err))
      )
  }
}