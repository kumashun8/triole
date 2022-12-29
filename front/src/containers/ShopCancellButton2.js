import { connect } from 'react-redux'
import SmallButton from '../components/SmallButton'
import { clearSelectedShop } from '../actions/detail'

const mapStateToProps = state => ({
  text: "x"
})

const mapDispatchToProps = dispatch => ({
  dispatchClickAction: value => dispatch(clearSelectedShop(2))
})

const ShopCancellButton2 = connect(
  mapStateToProps,
  mapDispatchToProps
)(SmallButton)

export default ShopCancellButton2