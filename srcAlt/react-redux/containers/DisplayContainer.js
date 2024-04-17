import DisplayUser from '../components/DisplayUser';
import { connect } from 'react-redux';

const MapStateToProps = (state) => {
  return { name: state.name, money: state.money };
};

const MapDispatchToProps = () => {
  return {};
};

export default connect(MapStateToProps, MapDispatchToProps)(DisplayUser);
