import axios from 'axios'

export const getShopDetailRequest = () => ({
  type: 'GET_SHOP_DETAIL_REQUEST'
})

export const getShopDetailSuccess = (json) => ({
  type: 'GET_SHOP_DETAIL_SUCCESS',
  shop: json,
  receivedAt: Date.now()
})

export const getShopDetailFaiue = (error) => ({
  type: 'GET_SHOP_DETAIL_FAILUE',
  error
})

export const requestIsNotExist = () => ({
  type: 'GET_SHOP_DETAIL_FAILUE',
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