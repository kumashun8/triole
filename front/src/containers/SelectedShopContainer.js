import { connect } from 'react-redux';
import SelectedShop from '../components/SelectedShop';
import current_state from '../utilities/current_state';

const mapStateToProps = state => ({
  shops: current_state(state.selectedShop).shop
});

const mapDispatchToProps = dispatch => ({
})

const NewSelectedShop = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedShop)

export default NewSelectedShop