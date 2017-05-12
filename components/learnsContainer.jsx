import { connect } from 'react-redux';
import NewLearnForm from '../components/newLearnForm';
import { getLearn } from '../actions/getLearn';
import { setLearn } from '../actions/setLearn';

// I have no idea what's going on here. Some Redux stuff?

function mapStateToProps(state) {
  return {
    learns: state.learns
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetLearn: () => dispatch(getLearn()),
    onSetLearn: () => dispatch(setLearn()),
  };
}

const learnsContainer = connect(mapStateToProps, mapDispatchToProps)(NewLearnForm);

export default learnsContainer;