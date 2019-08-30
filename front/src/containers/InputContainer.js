import { connect } from 'react-redux';
import { updateInput } from '../actions/input';
import { NewestOf } from './CollectionPostInput';
import Input from '../components/Input';

const mapStateToProps = state => ({
  inputedDatas: NewestOf(state.input).inputedDatas
});

const mapDispatchToProps = dispatch => ({
  dispatchUpdate: (key, value) => dispatch(updateInput(key, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Input);