import { connect } from 'react-redux';
import AddNumber from '../components/AddNumber';

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (size) => {
      dispatch({ type: 'INCREMENT', size: size });
    },
  };
};

export default connect(null, mapDispatchToProps)(AddNumber);
