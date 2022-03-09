import { connect } from 'react-redux';
import MainFilter from '../components/result-filter/MainFilter';
import { filterByColumn } from '../modules/result';

const mapStateToProps = (state) => {
  return { resultList: state.result.posts };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSort: (option) => () => {
      dispatch(filterByColumn(option));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainFilter);
