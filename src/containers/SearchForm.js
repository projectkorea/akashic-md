import { connect } from 'react-redux';
import SearchForm from '../components/SearchForm';
import { searchWords } from '../modules/result';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (words) => {
      dispatch(searchWords(words));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
