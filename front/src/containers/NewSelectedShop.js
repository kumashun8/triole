import { connect } from 'react-redux'
import SelectedShop from '../components/SelectedShop'
import { requestIsNotExist } from '../actions/posting'

const mapStateToProps = (state) => {
  const length = state.selectedShop.length
  const currentState = state.selectedShop[length - 1]
  return {
    selectedShop: currentState.item
  }
}

const NewSelectedShop = connect(
  mapStateToProps,
  dispatch => ({ dispatchSelectCancel: value => dispatch(requestIsNotExist())})
)(SelectedShop)

export default NewSelectedShop