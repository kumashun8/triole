import { connect } from 'react-redux'
import MyModal from '../components/MyModal'
import { openForm, closeForm } from '../actions/form'
import { NewestOf } from './CollectionPostInput'
import { isScrolling, isNotScrolling } from '../actions/window'
import { clearPreview } from '../actions/preview'

const mapStateToProps = state => ({
  show: NewestOf(state.form).show,
  isScrolling: NewestOf(state.window).isScrolling
})

const mapDispatchToProps = dispatch => ({
  dispatchOpen: value => dispatch(openForm()),
  dispatchClose: value => dispatch(closeForm()),
  dispatchScrolling: value => dispatch(isScrolling()),
  dispatchNotScrolling: value => dispatch(isNotScrolling()),
  dispatchClear: i => dispatch(clearPreview(i))
})

const FormModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyModal)

export default FormModal