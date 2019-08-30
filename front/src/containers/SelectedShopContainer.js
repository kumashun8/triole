import { connect } from 'react-redux';
import SelectedShop from '../components/SelectedShop';
import current_state from '../utilities/current_state';

const mapStateToProps = state => {
  const inputDatas = current_state(state.input).inputDatas;
  return ({
    shops: [
      inputDatas["shop"]
    ]
  })
};

const mapDispatchToProps = dispatch => ({
})

const NewSelectedShop = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedShop)

export default NewSelectedShop