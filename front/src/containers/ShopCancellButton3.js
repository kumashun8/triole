import { connect } from 'react-redux'
import SmallButton from '../components/SmallButton'
import { clearSelectedShop } from '../actions/detail'

const mapStateToProps = state => ({
  text: "x"
})

const mapDispatchToProps = dispatch => ({
  dispatchClickAction: value => dispatch(clearSelectedShop(3))
})

const ShopCancellButton3 = connect(
  mapStateToProps,
  mapDispatchToProps
)(SmallButton)

export default ShopCancellButton3