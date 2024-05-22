import ClickButton from '../components/ClickButton';
import { connect } from 'react-redux';

const MapStateToProps = (state) => {
  return { initMoney: state.moeny, name: state.name };
};

const MapDispatchToProps = (dispatch) => {
  return {
    onClick: (isAdd, money) => {
      isAdd
        ? dispatch({ type: 'MONEY_INCREASE', money })
        : dispatch({ type: 'MONEY_DECREASE', money });
    },
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(ClickButton);
