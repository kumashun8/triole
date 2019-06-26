import axios from 'axios'

export const getShopListRequest = () => ({
  type: 'GET_SHOP_LIST_REQUEST'
})

export const getShopListSuccess = (json) => ({
  type: 'GET_SHOP_LIST_SUCCESS',
  shopList: json,
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

export const getShopList = (text) => {
  return (dispatch) => {
    dispatch(getShopListRequest())
    return axios.get(process.env.REACT_APP_API_URI + '/api/v1/search/' + text)
      .then(res => {
        console.log(res.data.predictions)
        dispatch(getShopListSuccess(res.data.predictions))
      }
      ).catch(err => 
      dispatch(getShopListFaiue(err))
    )
  }
}