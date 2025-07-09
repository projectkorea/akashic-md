import { connect } from 'react-redux';
import SubTable from '../components/result-table/sub-table/SubTable';
import { getPost, toggleSelect, toggleSelectAll } from '../modules/result';

const mapStateToProps = (state) => {
  return {
    resultList: state.result.post.data,
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

export default connect(mapStateToProps, mapDispatchToProps)(SubTable);
