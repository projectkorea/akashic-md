import SearchForm from '../components/SearchForm';
import SelectListView from '../containers/SelectListView';
import ResultListView from '../components/ResultListView';

const Result = () => {
  return (
    <div>
      <SearchForm></SearchForm>
      <SelectListView></SelectListView>
      <ResultListView></ResultListView>
    </div>
  );
};

export default Result;
