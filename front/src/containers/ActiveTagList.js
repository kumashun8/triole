import { connect } from 'react-redux'
import TagList from '../components/TagList'
import { getCollectionsByTag } from '../actions/index'

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => ({
  dispatchTagged: tag => dispatch(getCollectionsByTag(tag))
})

const ActiveTagList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TagList)

export default ActiveTagList
