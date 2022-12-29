import { connect } from 'react-redux'
import CollectionList from '../components/CollectionList'
import { NewestOf } from './CollectionPostInput'

const mapStateToProps = state => {
  const newIndex = NewestOf(state.index)
  return {
    collections: newIndex.collections,
    tag: newIndex.tag
  }
}


const mapDispatchToProps = dispatch => {

}

const CollectionIndex = connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionList)

export default CollectionIndex

