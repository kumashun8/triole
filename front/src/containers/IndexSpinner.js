import { connect } from 'react-redux'
import { NewestOf } from './CollectionPostInput'
import MySpinner from '../components/MySpinner'

const mapStateToProps = state => ({
  loadIsFinished: NewestOf(state.post).isFetching
})

const mapDispatchToProps = dispatch => ({
  
})

const IndexSpinner = connect(
  mapStateToProps,
  mapDispatchToProps
)(MySpinner)

export default IndexSpinner