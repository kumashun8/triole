import { IndexStatuses } from '../actions/index'

const initialState = {
  isFetching: false,
  collections: []
}

const index = (state = [initialState], action) => {
  switch (action.type) {
    case IndexStatuses.GET_COLLECTIONS_REQUEST:
      console.log("request!")
      return [
        ...state,
        {
          isFetching: true,
          collections: []
        }
      ]
    case IndexStatuses.GET_COLLECTIONS_SUCCESS:
      console.log("success!")
      return [
        ...state,
        {
          isFetching: false,
          collections: action.collections,
          lastUpdated: action.recievedAt
        }
      ]
    case IndexStatuses.GET_COLLECTIONS_FAILUE:
      console.log("failue!")
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