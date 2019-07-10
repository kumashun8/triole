import { connect } from 'react-redux'
import SelectedShop from '../components/SelectedShop'
import { clearSelectedShop } from '../actions/detail'

const mapStateToProps = state => {
  const length = state.selectedShop.length
  const currentState = state.selectedShop[length - 1]
  console.log(state)
  return {
    selectedShop: currentState.shop[0],
    index: 1
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchSelectCancel: value => dispatch(clearSelectedShop(1))
})

const NewSelectedShop = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedShop)

export default NewSelectedShop