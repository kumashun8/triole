import axios from 'axios'

export const DetailStatuses = {
  GET_SHOP_DETAIL_REQUEST: 'GET_SHOP_DETAIL_REQUEST',
  GET_SHOP_DETAIL_SUCCESS: 'GET_SHOP_DETAIL_SUCCESS',
  GET_SHOP_DETAIL_FAILUE: 'GET_SHOP_DETAIL_FAILUE'
}

export const getShopDetailRequest = () => ({
  type: 'GET_SHOP_DETAIL_REQUEST',
  isSelected: false,
})

export const getShopDetailSuccess = (json) => ({
  type: 'GET_SHOP_DETAIL_SUCCESS',
  shop: json,
  isSelected: true,
  receivedAt: Date.now()
})

export const getShopDetailFaiue = (error) => ({
  type: 'GET_SHOP_DETAIL_FAILUE',
  isSelected: false,
  error
})

export const requestIsNotExist = () => ({
  type: 'GET_SHOP_DETAIL_FAILUE',
  isSelected: false,
  shop: []
})

export const getShopDetail = (placeId) => {
  return (dispatch) => {
    dispatch(getShopDetailRequest())
    return axios.get(process.env.REACT_APP_API_URI + '/api/v1/detail/' + placeId)
      .then(res => {
        console.log(res.data.result)
        dispatch(getShopDetailSuccess(res.data.result))
      }
      ).catch(err =>
        dispatch(getShopDetailFaiue(err))
      )
  }
}