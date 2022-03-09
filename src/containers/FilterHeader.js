import { connect } from 'react-redux';
import FilterHeader from '../components/result-filter/FilterHeader';
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

export default connect(mapStateToProps, mapDispatchToProps)(FilterHeader);
