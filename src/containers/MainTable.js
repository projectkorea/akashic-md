import { connect } from 'react-redux';
import MainTable from '../components/result-table/main-table/MainTable';
import { getPosts } from '../modules/result';

const mapStateToProps = (state) => {
  return {
    resultData: state.result.posts,
    searchData: state.result.searched,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: () => {
      dispatch(getPosts());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainTable);
