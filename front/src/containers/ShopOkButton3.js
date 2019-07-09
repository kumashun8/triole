import { connect } from 'react-redux'
import OkButton from '../components/OkButton'
import { clearShopList } from '../actions/search'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  dispatchOkAction: value => dispatch(clearShopList(3))
})

const ShopOkButton = connect(
  mapStateToProps,
  mapDispatchToProps
) (OkButton)

export default ShopOkButton