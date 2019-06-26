import { connect } from 'react-redux'
import SelectedShop from '../components/SelectedShop'

const mapStateToProps = (state) => {
  const length = state.selectedShop.length
  const currentState = state.selectedShop[length - 1]
  console.log(currentState.selectedShop)
  return {
    selectedShop: currentState.selectedShop
  }
}

const NewSelectedShop = connect(mapStateToProps)(SelectedShop)

export default NewSelectedShop