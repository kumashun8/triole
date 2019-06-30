import { connect } from 'react-redux'
import { postCollection } from '../actions/posting'
import PostInput from '../components/PostlInput'

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => ({
  dispatchPostAction: text => dispatch(postCollection(text))
})

const CollectionPostInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostInput)

export default CollectionPostInput