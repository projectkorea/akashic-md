import { connect } from 'react-redux';
import SelectListView from '../components/SelectListView';
import { toggleSelect } from '../modules/result';

const mapStateToProps = (state) => {
  return { selectedList: state.result.selected };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelect: (name) => (id) => {
      dispatch(toggleSelect(name, id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectListView);
