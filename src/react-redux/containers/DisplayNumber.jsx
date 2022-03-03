import DisplayNumber from '../components/DisplayNumber';
import { connect } from 'react-redux';

const mapReduxStateToReactProps = (state) => {
  return { number: state.number };
};

const mapReduxDispatchToReactProps = (dispatch, props) => {
  return {
    onHandler: () => {
      //dispatch()
      console.log(props.test);
    },
  };
};

export default connect(
  mapReduxStateToReactProps,
  mapReduxDispatchToReactProps
)(DisplayNumber);
