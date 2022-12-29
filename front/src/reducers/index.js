import { IndexStatuses } from '../actions/index'

const initialState = {
  isFetching: false,
  collections: []
}

const index = (state = [initialState], action) => {
  switch (action.type) {
    case IndexStatuses.GET_COLLECTIONS_REQUEST:
      return [
        ...state,
        {
          isFetching: true,
          collections: []
        }
      ]
    case IndexStatuses.GET_COLLECTIONS_SUCCESS:
      return [
        ...state,
        {
          isFetching: false,
          collections: action.collections,
          tag: action.tag,
          lastUpdated: action.recievedAt
        }
      ]
    case IndexStatuses.GET_COLLECTIONS_FAILUE:
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

export default index