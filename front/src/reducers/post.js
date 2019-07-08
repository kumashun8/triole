import { PostingStatuses } from '../actions/posting'

const initialState = {
  isFetching: false,
  collection: {}
}

const post = (state = [initialState], action) => {
  switch (action.type) {
    case PostingStatuses.UPDATE_POSTINGT_FORM:
      return [
        ...state,
        {
          isFetching: false,
          collection: action.collection
        }
      ]
    case PostingStatuses.POST_COLLECTION_REQUEST:
      return [
        ...state,
        {
          isFetching: true
        }
      ]
    case PostingStatuses.POST_COLLECTION_SUCCESS:
      return [
        ...state,
        {
          isFetching: false,
          lastUpdated: action.recievedAt
        }
      ]
    case PostingStatuses.POST_COLLECTION_FAILUE:
      return [
        ...state,
        {
          isFetching: false,
          error: action.error
        }
      ]
    default:
      return state
  }
}

export default post 