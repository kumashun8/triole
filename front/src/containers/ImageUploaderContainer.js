import { connect } from 'react-redux'
import {updateInput, clearInput} from '../actions/input'
import ImageUploader from '../components/ImageUploader'
import current_state from '../utilities/current_state';
import { defaultImageUrl } from '../reducers/preview';

const mapStateToProps = state => {
  const inputDatas = current_state(state.input).inputDatas;
  return ({
    images: [
      (inputDatas["reco_image_1"] || { url: defaultImageUrl }),
      (inputDatas["reco_image_2"] || { url: defaultImageUrl }),
      (inputDatas["reco_image_3"] || { url: defaultImageUrl })
    ]
  })
};

const mapDispatchToProps = dispatch => ({
  dispatchUpdate: (name, value) => dispatch(updateInput(name, value)),
  dispatchClear: name => dispatch(clearInput(name))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageUploader)