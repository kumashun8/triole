import { connect } from 'react-redux'
import MyModal from '../components/MyModal'
import { openForm, closeForm } from '../actions/form'
import { NewestOf } from './CollectionPostInput'

const mapStateToProps = state => ({
  show: NewestOf(state.form).show
})

const mapDispatchToProps = dispatch => ({
  dispatchOpen: value => dispatch(openForm()),
  dispatchClose: value => dispatch(closeForm())
})

const FormModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyModal)

export default FormModal