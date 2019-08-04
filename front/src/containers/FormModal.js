import { connect } from 'react-redux'
import MyModal from '../components/MyModal'
import { openForm, closeForm } from '../actions/form'
import { NewestOf } from './CollectionPostInput'
import { isScrolling, isNotScrolling } from '../actions/window';

const mapStateToProps = state => ({
  show: NewestOf(state.form).show,
  isScrolling: NewestOf(state.window).isScrolling
})

const mapDispatchToProps = dispatch => ({
  dispatchOpen: value => dispatch(openForm()),
  dispatchClose: value => dispatch(closeForm()),
  dispatchScrolling: value => dispatch(isScrolling()),
  dispatchNotScrolling: value => dispatch(isNotScrolling())
})

const FormModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyModal)

export default FormModal