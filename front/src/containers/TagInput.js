import { connect } from 'react-redux'
import { getCollectionsByTag } from '../actions/index'
import SearchInput from '../components/SearchInput'

const mapStateToProps = state => ({
  index: 10,
  label: "",
  placeholder: "タグで検索"
})

const mapDispatchToProps = dispatch => ({
  dispatchGetAction: tag => dispatch(getCollectionsByTag(tag))
})

const TagInput = connect(
  mapStateToProps,
  mapDispatchToProps
) (SearchInput)

export default TagInput