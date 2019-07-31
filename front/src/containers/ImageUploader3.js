import { connect } from 'react-redux'
import { updatePreview, clearPreview } from '../actions/preview'
import ImageUploader from '../components/ImageUploader'

const mapStateToProps = state => {
  const length = state.previews.length
  const currentState = state.previews[length - 1]
  console.log(currentState)
  return {
    images: currentState.images[2],
    i: 2
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchUpdate: (imageUrl, i) => dispatch(updatePreview(imageUrl, i)),
  dispatchClear: i => dispatch(clearPreview(i))
})

const ImageUploader1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageUploader)

export default ImageUploader1