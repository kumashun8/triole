import { connect } from 'react-redux'
import { getCollections } from '../actions/index'
import CollectionList from '../components/CollectionList'

const mapStateToProps = state => {
  const length = state.index.length
  const currentState = state.index[length - 1]
  // console.log(currentState)
  return {
    collections: currentState.collections
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchGetAction: value => dispatch(getCollections())
})

const CollectionIndex = connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionList)

export default CollectionIndex

