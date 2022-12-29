import { connect } from 'react-redux';
import { updateInput } from '../actions/input';
import Input from '../components/Input';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  dispatchUpdate: (key, value) => dispatch(updateInput(key, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Input);