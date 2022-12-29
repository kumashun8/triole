import { connect } from 'react-redux';
import SmallButton from '../components/SmallButton';
import { clearSelectedShop } from '../actions/detail';
import { clearInput } from '../actions/input';

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  dispatchClickAction: name => dispatch(clearInput(name))
})

const ShopCancellButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(SmallButton)

export default ShopCancellButton