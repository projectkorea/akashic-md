import { connect } from 'react-redux';
import ResultListDetail from '../components/result-list/ResultListDetail';
import { getPost } from '../modules/result';

const mapStateToProps = (state) => {
  return { resultList: state.result.post };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateByName: (name) => {
      dispatch(getPost(name));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultListDetail);
