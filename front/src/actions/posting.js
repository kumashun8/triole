import axios from 'axios'
import { getCollections } from './index'

export const PostingStatuses = {
  UPDATE_POSTINGT_FORM: 'UPDATE_POSTINGT_FORM',
  POST_COLLECTION_REQUEST: 'POST_COLLECTION_REQUEST',
  POST_COLLECTION_SUCCESS: 'POST_COLLECTION_SUCCESS',
  POST_COLLECTION_FAILUE: 'POST_COLLECTION_FAILUE'
}

export const updatePostingForm = (collection) => ({
  type: 'UPDATE_POSTINGT_FORM',
  collection: collection
})

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
  return (dispatch) => {
    dispatch(postCollectionRequest())
    return axios.post(process.env.REACT_APP_API_URI + '/api/v1/collections/',
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