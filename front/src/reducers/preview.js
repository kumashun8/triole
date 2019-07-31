import { PreviewStatuses } from '../actions/preview'

const initialState = {
  imageUrls: ["", "", ""]
}

const previews = (state = [initialState], action) => {
  const length = state.length
  const currentState = state[length - 1]
  let newImageUrls = currentState.imageUrls
  switch (action.type) {
    case PreviewStatuses.UPDATE_PREVIEW:
      newImageUrls[action.index - 1] = action.imageUrl
      return [
        ...state,
        {
          imageUrls: newImageUrls
        }
      ]
    case PreviewStatuses.CLEAR_PREVIEW:
      newImageUrls[action.index - 1] = ""
      return [
        ...state,
        {
          imageUrls: newImageUrls
        }
      ]
    default:
      return state
  }
}

export default previews