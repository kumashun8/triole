import { connect } from 'react-redux';
import { updateInput, clearInput } from '../actions/input';
import ImageUploader from '../components/ImageUploader';
import current_state from '../utilities/current_state';

const mapStateToProps = state => {
  const c = current_state(state.input).collection;
  return ({
    images: [c.reco_image_1, c.reco_image_2, c.reco_image_3]
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