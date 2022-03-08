import { connect } from 'react-redux';
import ResultListDetail from '../components/result-list/ResultListDetail';
import { getPost, toggleSelect, toggleSelectAll } from '../modules/result';

const mapStateToProps = (state) => {
  return {
    resultList: state.result.post.data,
    isPostLoading: state.result.post.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateByName: (name) => {
      dispatch(getPost(name));
    },
    onSelect: (name) => (id) => {
      dispatch(toggleSelect(name, id));
    },
    onSelectAll: (isSelectAll, name) => {
      dispatch(toggleSelectAll(isSelectAll, name));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultListDetail);
