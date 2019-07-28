import { connect } from 'react-redux'
import { toggleCollectionDetail } from '../actions/show'
import CollectionList from '../components/CollectionList'

const mapStateToProps = state => {
  const length = state.index.length
  const currentState = state.index[length - 1]
  const length2 = state.show.length
  const currentState2 = state.show[length2 - 1]
  console.log(currentState2)
  return {
    collections: currentState.collections,
    activeCollection: currentState2.activeCollection
  }
}


const mapDispatchToProps = dispatch => ({
  dispatchToggleAction: index => {
    dispatch(toggleCollectionDetail(index))
    document.getElementById(index).style.display = "block"
  }
})

const CollectionIndex = connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionList)

export default CollectionIndex

