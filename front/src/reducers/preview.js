import { PreviewStatuses } from '../actions/preview'

const defaultImageUrl = "http://placehold.jp/200x200.png"

const createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;

const initialState = {
  images: [
    {
      url: defaultImageUrl,
      file: {}
    },
    {
      url: defaultImageUrl,
      file: {}
    },
    {
      url: defaultImageUrl,
      file: {}
    }
  ]
}

const previews = (state = [initialState], action) => {
  const length = state.length
  const currentState = state[length - 1]
  let newImages = currentState.images
  
  switch (action.type) {
    case PreviewStatuses.UPDATE_PREVIEW:
      newImages[action.index] = {
        file: action.imageFile,
        url: createObjectURL(action.imageFile)
      }
      return [
        ...state,
        {
          images: newImages
        }
      ]
    case PreviewStatuses.CLEAR_PREVIEW:
      newImages[action.index] = {
        file: {},
        url: defaultImageUrl
      }
      return [
        ...state,
        {
          images: newImages
        }
      ]
    default:
      return state
  }
}

export default previews