import { connect } from 'react-redux'
import { toggleCollectionDetail } from '../actions/show'
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
  dispatchToggleAction: index => dispatch(toggleCollectionDetail(index))
})

const CollectionIndex = connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionList)

export default CollectionIndex

