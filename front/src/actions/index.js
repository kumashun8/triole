import axios from 'axios'

// export const API_URI = "http://localhost:3000"
export const API_URI = "https://tri-ole.herokuapp.com/"

export const IndexStatuses = {
  GET_COLLECTIONS_REQUEST: 'GET_COLLECTIONS_REQUEST',
  GET_COLLECTIONS_SUCCESS: 'GET_COLLECTIONS_SUCCESS',
  GET_COLLECTIONS_FAILUE: 'GET_COLLECTIONS_FAILUE'
}

export const getCollectionsRequest = () => ({
  type: 'GET_COLLECTIONS_REQUEST'
})

export const getCollectionsSuccess = (json, tag="") => ({
  type: 'GET_COLLECTIONS_SUCCESS',
  collections: json,
  tag,
  receivedAt: Date.now()
})

export const getCollectionsFaiue = (error) => ({
  type: 'GET_COLLECTIONS_FAILUE',
  error
})

export const requestIsNotExist = () => ({
  type: 'GET_COLLECTIONS_FAILUE'
})

export const getCollections = () => {
  return (dispatch) => {
    dispatch(getCollectionsRequest())
    return axios.get(API_URI + '/api/v1/collections/')
      .then(res => {
        dispatch(getCollectionsSuccess(res.data))
        console.log(res.data)
      }
      ).catch(err => 
      dispatch(getCollectionsFaiue(err))
    )
  }
}

export const getCollectionsByTag = (tag) => {
  return (dispatch) => {
    dispatch(getCollectionsRequest())
    console.log(typeof(tag))
    return axios.get(API_URI + '/api/v1/tagged/' + tag)
      .then(res => {
        dispatch(getCollectionsSuccess(res.data, tag))
        console.log(res.data)
      }
      ).catch(err => 
      dispatch(getCollectionsFaiue(err))
    )
  }
}