import { connect } from 'react-redux';
import ResultSearch from '../components/result-search/ResultSearch';
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

export default connect(mapStateToProps, mapDispatchToProps)(ResultSearch);
