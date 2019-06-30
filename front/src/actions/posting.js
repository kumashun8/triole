import axios from 'axios'

export const PostingStatuses = {
  POST_COLLECTION_REQUEST: 'POST_COLLECTION_REQUEST',
  POST_COLLECTION_SUCCESS: 'POST_COLLECTION_SUCCESS',
  POST_COLLECTION_FAILUE: 'POST_COLLECTION_FAILUE'
}

export const postCollectionRequest = () => ({
  type: 'POST_COLLECTION_REQUEST'
})

export const postCollectionSuccess = (json) => ({
  type: 'POST_COLLECTION_SUCCESS',
  collection: json
})

export const postCollectionFaiue = (error) => ({
  type: 'POST_COLLECTION_FAILUE',
  error: error
})

export const postCollection = (collection) => {
  return (dispatch) => {
    dispatch(postCollectionRequest())
    return axios.post(process.env.REACT_APP_API_URI + '/api/v1/collections/', { collection: collection })
      .then(res => {
        console.log(res)
        dispatch(postCollectionSuccess(res))
      }
      ).catch(err => 
        dispatch(postCollectionFaiue(err))
      )
  }
}