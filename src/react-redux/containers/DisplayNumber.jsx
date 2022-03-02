import DisplayNumber from '../components/DisplayNumber';
import { connect } from 'react-redux';

const mapReduxStateToReactProps = (state) => {
  return { number: state.number };
};

const mapReduxDispatchToReactProps = () => {
  return {};
};

export default connect(
  mapReduxStateToReactProps,
  mapReduxDispatchToReactProps
)(DisplayNumber);
