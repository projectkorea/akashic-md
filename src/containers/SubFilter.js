import { connect } from 'react-redux';
import SubFilter from '../components/result-filter/SubFilter';
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

export default connect(mapStateToProps, mapDispatchToProps)(SubFilter);
