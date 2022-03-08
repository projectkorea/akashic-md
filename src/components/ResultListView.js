import ResultList from '../containers/ResultList';
import ResultSearch from '../containers/ResultSearch';

const ResultListView = ({ onSort }) => {
  return (
    <div
      style={{ width: 800, height: 800, border: '2px solid blue', padding: 30 }}
    >
      <ResultSearch />
      <ResultList />
    </div>
  );
};

export default ResultListView;
