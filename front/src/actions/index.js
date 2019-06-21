import axios from 'axios'

// PlaceAPI関連

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
    return axios.get('http://localhost:3001/place/' + text)
      .then(res => {
        console.log(res.data.predictions)
        dispatch(getShopListSuccess(res.data.predictions))
      }
      ).catch(err => 
      dispatch(getShopListFaiue(err))
    )
  }
}

// 検索用

let textCount = 0

export const searchingShop = (text) => ({
  type: 'SEARCHING_SHOP',
  id: textCount++,
  text
})

export const chooseShop = listId => ({
  type: 'CHOOSE_SHOP',
  listId
})

export const saveShop = placeId => ({
  type: 'SAVE_SHOP',
  placeId
})