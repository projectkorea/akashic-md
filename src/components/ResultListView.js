import ResultList from '../containers/ResultList';
import FilterResult from '../containers/FilterResult';

const ResultListView = () => {
  return (
    <div
      style={{ width: 800, height: 800, border: '2px solid blue', padding: 30 }}
    >
      <FilterResult />
      <ResultList />
    </div>
  );
};

export default ResultListView;
