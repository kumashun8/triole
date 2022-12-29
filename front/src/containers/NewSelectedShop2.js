import { connect } from 'react-redux'
import SelectedShop from '../components/SelectedShop'
import { clearSelectedShop } from '../actions/detail'

const mapStateToProps = state => {
  const length = state.selectedShop.length
  const currentState = state.selectedShop[length - 1]
  return {
    selectedShop: currentState.shop[1],
    index: 2
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchSelectCancel: value => dispatch(clearSelectedShop(2))
})

const NewSelectedShop = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedShop)

export default NewSelectedShop