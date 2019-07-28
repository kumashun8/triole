import { connect } from 'react-redux'
import CollectionList from '../components/CollectionList'

const mapStateToProps = state => {
  const length = state.index.length
  const currentState = state.index[length - 1]
  return {
    collections: currentState.collections
  }
}


const mapDispatchToProps = dispatch => {

}

const CollectionIndex = connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionList)

export default CollectionIndex

