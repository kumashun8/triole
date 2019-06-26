import { connect } from 'react-redux'
import OkButton from '../components/OkButton'
import { requestIsNotExist } from '../actions'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  dispatchOkAction: value => dispatch(requestIsNotExist())
})

const ShopOkButton = connect(
  mapStateToProps,
  mapDispatchToProps
) (OkButton)

export default ShopOkButton