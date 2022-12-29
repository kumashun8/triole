import axios from 'axios'
import { getCollections } from './index'
import { API_URI } from './index'

export const PostingStatuses = {
  POST_COLLECTION_REQUEST: 'POST_COLLECTION_REQUEST',
  POST_COLLECTION_SUCCESS: 'POST_COLLECTION_SUCCESS',
  POST_COLLECTION_FAILUE: 'POST_COLLECTION_FAILUE'
}

export const postCollectionRequest = () => ({
  type: 'POST_COLLECTION_REQUEST'
})

export const postCollectionSuccess = () => ({
  type: 'POST_COLLECTION_SUCCESS'
})

export const postCollectionFaiue = (error) => ({
  type: 'POST_COLLECTION_FAILUE',
  error: error
})

export const postCollection = (collection) => {
  console.log(collection)
  return (dispatch) => {
    dispatch(postCollectionRequest())
    return axios.post(API_URI + '/api/v1/collections/',
      collection)
      .then(res => {
        // console.log(res)
        dispatch(postCollectionSuccess(res))
        dispatch(getCollections())
      }
      ).catch(err => 
        dispatch(postCollectionFaiue(err))
      )
  }
}