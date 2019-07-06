import { connect } from 'react-redux'
import SelectedShop from '../components/SelectedShop'
import { requestIsNotExist } from '../actions/detail'

const mapStateToProps = state => {
  const length = state.selectedShop.length
  const currentState = state.selectedShop[length - 1]
  console.log(state)
  return {
    selectedShop: currentState.shop
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchSelectCancel: value => dispatch(requestIsNotExist())
})

const NewSelectedShop = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedShop)

export default NewSelectedShop