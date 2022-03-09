import { connect } from 'react-redux';
import SubFilter from '../components/result-filter/SubFilter';
import { filterByColumnId } from '../modules/result';

const mapStateToProps = (state) => {
  return { resultList: state.result.posts };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSortById: (option) => () => {
      dispatch(filterByColumnId(option));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubFilter);
