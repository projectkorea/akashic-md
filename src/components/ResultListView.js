import ResultList from './result-list/ResultList';

const ResultListView = () => {
  const listView = [
    ['찰리', 100],
    ['배내자', 1000],
  ];
  const newListView = listView.map((item) => {
    return <ResultList key={item[0]} />;
  });
  return (
    <div
      style={{ width: 800, height: 800, border: '2px solid blue', padding: 30 }}
    >
      {newListView}
    </div>
  );
};

export default ResultListView;
