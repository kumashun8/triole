import { connect } from 'react-redux'
import OkButton from '../components/OkButton'
import { requestIsNotExist } from '../actions'

const mapStateToProps = (state) => {
  return {
  }
}

const ShopOkButton = connect(
  mapStateToProps,
  dispatch => ({ dispatchOkAction: value => dispatch(requestIsNotExist()) })
) (OkButton)

export default ShopOkButton