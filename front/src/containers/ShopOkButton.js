import { connect } from 'react-redux'
import SmallButton from '../components/SmallButton'
import { clearShopList } from '../actions/search'

const mapStateToProps = state => ({
  text: "OK"
})

const mapDispatchToProps = dispatch => ({
  dispatchOkAction: value => dispatch(clearShopList(1))
})

const ShopOkButton = connect(
  mapStateToProps,
  mapDispatchToProps
) (SmallButton)

export default ShopOkButton